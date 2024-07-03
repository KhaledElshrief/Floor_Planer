import { useRef, useEffect } from "react";
import { useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import wall from "../../data/images/light_fine_wood.jpg";
// import ground from "../../data/images/hardwood.png";
import hardwood2_diffuse from "../../data/images/hardwood2_diffuse.jpg";
import hardwood2_bump from "../../data/images/hardwood2_bump.jpg";
import hardwood2_roughness from "../../data/images/hardwood2_roughness.jpg";
import brick_diffuse from "../../data/images/brick_diffuse.png";
import brick_bump from "../../data/images/brick_bump.jpg";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const PLAN_WIDTH = 150;
const PLAN_HEIGHT = 150;
const WALL_WIDTH = 0.1;
const WALL_HEIGHT = 3;
const SCALE_FACTOR = 0.1;

export default function ThreeD(props) {
  const { scene } = useThree();
  const controls = useRef();
  const planeRef = useRef();

  useEffect(() => {
    let camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.x = -4;
    camera.position.z = 2;
    camera.position.y = -6;
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
    hemiLight.position.set(0, 100, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0x8d8d8d, 3);
    dirLight.position.set(-0, 15, 30);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 50;
    dirLight.shadow.camera.bottom = -25;
    dirLight.shadow.camera.left = -25;
    dirLight.shadow.camera.right = 25;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 200;
    dirLight.shadow.mapSize.set(1024, 1024);
    scene.add(dirLight);

    // const planeGeometry = new THREE.PlaneGeometry(
    //   PLAN_WIDTH,
    //   PLAN_HEIGHT,
    //   10,
    //   10
    // );
    // let planeMaterial = new THREE.MeshStandardMaterial({
    //   map: new THREE.TextureLoader().load(ground),
    //   side: THREE.DoubleSide,
    // });
    // // Ensure the existence of faceVertexUvs array
    // if (
    //   !planeGeometry.faceVertexUvs ||
    //   planeGeometry.faceVertexUvs.length === 0
    // ) {
    //   console.error(
    //     "planeGeometry.faceVertexUvs is not properly initialized or is empty."
    //   );
    // } else {
    //   // Modify UVs to repeat the texture for each segment
    //   planeGeometry.faceVertexUvs[0] = [];
    //   for (var i = 0; i < planeGeometry.faces.length; i++) {
    //     var face = planeGeometry.faces[i];
    //     var uvs = [];
    //     for (var j = 0; j < 3; j++) {
    //       var vertexIndex = face[["a", "b", "c"][j]];
    //       var vertex = planeGeometry.vertices[vertexIndex];
    //       uvs.push(
    //         new THREE.Vector2(
    //           vertex.x / PLAN_WIDTH + 0.5,
    //           vertex.y / PLAN_HEIGHT + 0.5
    //         )
    //       );
    //     }
    //     planeGeometry.faceVertexUvs[0].push(uvs);
    //   }
    // }
    // planeGeometry.receiveShadow = true;
    // planeRef.current = new THREE.Mesh(planeGeometry, planeMaterial);
    // planeRef.current.rotation.x = -0.5 * Math.PI;
    // planeRef.current.receiveShadow = true; // This line makes the plane receive shadows

    // scene.add(planeRef.current);
    let floorMat = new THREE.MeshStandardMaterial({
      roughness: 0.8,
      color: 0xffffff,
      metalness: 0.2,
      bumpScale: 1,
    });
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(hardwood2_diffuse, function (map) {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(10, 24);
      map.colorSpace = THREE.SRGBColorSpace;
      floorMat.map = map;
      floorMat.needsUpdate = true;
    });
    textureLoader.load(hardwood2_bump, function (map) {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(10, 24);
      floorMat.bumpMap = map;
      floorMat.needsUpdate = true;
    });
    textureLoader.load(hardwood2_roughness, function (map) {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(10, 24);
      floorMat.roughnessMap = map;
      floorMat.needsUpdate = true;
    });
    const floorGeometry = new THREE.PlaneGeometry(30, 30);
    const floorMesh = new THREE.Mesh(floorGeometry, floorMat);
    floorMesh.receiveShadow = true;
    floorMesh.rotation.x = -Math.PI / 2.0;
    scene.add(floorMesh);

    let cubeMat = new THREE.MeshStandardMaterial({
      roughness: 0.7,
      color: 0xffffff,
      bumpScale: 1,
      metalness: 0.2,
    });
    textureLoader.load(brick_diffuse, function (map) {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      map.colorSpace = THREE.SRGBColorSpace;
      cubeMat.map = map;
      cubeMat.needsUpdate = true;
    });
    textureLoader.load(brick_bump, function (map) {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      cubeMat.bumpMap = map;
      cubeMat.needsUpdate = true;
    });

    // const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    // const boxMesh = new THREE.Mesh(boxGeometry, cubeMat);
    // boxMesh.position.set(-0.5, 0.25, -1);
    // boxMesh.castShadow = true;
    // scene.add(boxMesh);

    const drawWall = (p1, p2) => {
      const isVertical = p1.x === p2.x;
      const distance =
        (isVertical ? Math.abs(p2.y - p1.y) : Math.abs(p2.x - p1.x)) *
        SCALE_FACTOR;

      const geometry = new THREE.BoxGeometry(WALL_WIDTH, WALL_HEIGHT, distance);

      const cube = new THREE.Mesh(geometry, cubeMat);

      cube.position.y = WALL_HEIGHT / 2;
      cube.position.x = (isVertical ? p1.x : (p1.x + p2.x) / 2) * SCALE_FACTOR;
      cube.position.z =
        -1 * (isVertical ? (p1.y + p2.y) / 2 : p1.y) * SCALE_FACTOR;

      if (!isVertical) {
        cube.rotation.y = Math.PI / 2;
      }
      cube.receiveShadow = true;
      cube.name = "cube";
      const mesh = scene.getObjectByName("cube");
      if (mesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
      scene.add(cube);
    };

    const drawingBoundaryMask = props.deliveredMask.ExteriorWall.map(
      (coord) => [coord.x, coord.y]
    );
    const drawingWallsMask = props.deliveredMask.InteriorWall.map((coord) => [
      coord.x,
      coord.y,
    ]);

    // start translate to zero
    // compute the transition value of y an x
    function translateToZero(points) {
      let xMin = points[0][0];
      let xMax = points[0][0];
      let yMin = points[0][1];
      let yMax = points[0][1];

      for (let j = 0; j < points.length - 1; j++) {
        if (points[j + 1][0] < xMin) {
          xMin = points[j + 1][0];
        }
        if (points[j + 1][1] < yMin) {
          yMin = points[j + 1][1];
        }
        if (points[j + 1][0] > xMax) {
          xMax = points[j + 1][0];
        }
        if (points[j + 1][1] > yMax) {
          yMax = points[j + 1][1];
        }
      }
      const cx = (xMax + xMin) / 2;
      const cy = (yMax + yMin) / 2;

      const newPoints = points.map((point) => {
        const newX = point[0] - cx;
        const newY = point[1] - cy;
        return [newX, newY];
      });
      let boundaryDetails = {
        cx: cx,
        cy: cy,
        newPoints: newPoints,
      };
      return boundaryDetails;
    }

    const translatedBoundaryMask =
      translateToZero(drawingBoundaryMask).newPoints;
    const cx = translateToZero(drawingBoundaryMask).cx;
    const cy = translateToZero(drawingBoundaryMask).cy;

    for (let i = 0; i < translatedBoundaryMask.length; i++) {
      const lastItem = translatedBoundaryMask.length - 1 === i;
      const p1 = {
        x: translatedBoundaryMask[i][0],
        y: translatedBoundaryMask[i][1],
      };
      const p2 = lastItem
        ? { x: translatedBoundaryMask[0][0], y: translatedBoundaryMask[0][1] }
        : {
            x: translatedBoundaryMask[i + 1][0],

            y: translatedBoundaryMask[i + 1][1],
          };

      drawWall(p1, p2);
    }

    for (let i = 0; i < drawingWallsMask.length - 1; i += 1) {
      const p1 = {
        x: drawingWallsMask[i][0] - cx,
        y: drawingWallsMask[i][1] - cy,
      };
      const p2 = {
        x: drawingWallsMask[i + 1][0] - cx,
        y: drawingWallsMask[i + 1][1] - cy,
      };

      drawWall(p1, p2);
    }
  }, []);

  return (
    <>
      {/* <ambientLight intensity={1} castShadow />
      <directionalLight position={[-50, 5, 50]} intensity={1} castShadow /> */}
      <PerspectiveCamera makeDefault position={[-16, 16, 8]} />
      <OrbitControls ref={controls} enableZoom enablePan />

      {/* <Model modelPath="./Models/window.glb" /> */}
    </>
  );
}
