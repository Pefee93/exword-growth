import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnoAI = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent to see HTML background
        container.appendChild(renderer.domElement);

        const material = new THREE.ShaderMaterial({
            transparent: true,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            },
            vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        float rand(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / iResolution.xy;
            uv.x *= iResolution.x / iResolution.y;
            
            // Base coordinates for falling stars
            vec2 pos = uv;
            pos.x -= pos.y * 0.4; // Angle of falling
            pos.y += iTime * 0.25; // Slower speed of falling
            
            // Create a grid for multiple stars
            vec2 gridId = floor(pos * 8.0);
            vec2 gridPos = fract(pos * 8.0) - 0.5;
            
            float randomVal = rand(gridId);
            
            // Determine if this cell has a star (higher threshold = more sporadic)
            float isStar = step(0.96, randomVal); 
            
            // Star shape (stretched streak)
            float distLine = length(vec2(gridPos.x * 2.0, gridPos.y * 0.05));
            float starGlow = smoothstep(0.04, 0.0, distLine);
            
            // Make them twinkle and cycle based on time and their ID
            float lifecycle = fract(iTime * 0.8 + randomVal * 10.0);
            float brightness = smoothstep(0.0, 0.2, lifecycle) * smoothstep(1.0, 0.8, lifecycle);
            
            // Fade out blur in the bottom 70% of the screen (uv.y goes from 0 at bottom to 1 at top)
            // Starts fading out below 0.7
            float bottomFade = smoothstep(0.2, 0.7, uv.y);
            
            // White-ish color
            vec3 color = vec3(0.9, 0.95, 1.0) * starGlow * isStar * brightness * 1.5 * bottomFade;
            
            // Extra subtle stationary stars
            vec2 staticPos = uv;
            vec2 staticId = floor(staticPos * 20.0);
            vec2 staticGrid = fract(staticPos * 20.0) - 0.5;
            float staticRand = rand(staticId);
            float isStaticStar = step(0.9, staticRand);
            float staticDist = length(staticGrid);
            float staticGlow = smoothstep(0.05, 0.0, staticDist) * (0.5 + 0.5 * sin(iTime * 3.0 + staticRand * 10.0));
            
            color += vec3(1.0, 1.0, 1.0) * staticGlow * isStaticStar;

            // Output color with alpha based on brightness
            float alpha = length(color) > 0.01 ? length(color) : 0.0;
            gl_FragColor = vec4(color, alpha);
        }
      `
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let frameId: number;
        const animate = () => {
            material.uniforms.iTime.value += 0.016;
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen"
        />
    );
};

export default AnoAI;
