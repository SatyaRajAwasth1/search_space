import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import './css/RotatingEarth.css';

const RotatingEarth = () => {
  const sceneRef = useRef();
  const rendererRef = useRef();

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    // Create a rotating Earth
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const texture = new THREE.TextureLoader().load('path-to-your-earth-texture.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Add lights (optional)
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Render function
    const animate = () => {
      requestAnimationFrame(animate);

      earth.rotation.y += 0.005;

      rendererRef.current.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="earth-container">
      {/* Your four rounded buttons go here */}
      <div className="rounded-button">Button 1</div>
      <div className="rounded-button">Button 2</div>
      <div className="rounded-button">Button 3</div>
      <div className="rounded-button">Button 4</div>
      {/* The 3D Earth will be rendered in this container */}
      <div ref={sceneRef} className="earth"></div>
    </div>
  );
};

export default RotatingEarth;
