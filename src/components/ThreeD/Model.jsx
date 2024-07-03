import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const model = useGLTF(props.modelPath);

  return (
    <mesh>
      <primitive object={model.scene} />
    </mesh>
  );
}
