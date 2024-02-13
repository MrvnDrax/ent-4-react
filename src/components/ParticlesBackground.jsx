import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from './config/particleConfig'

const ParticlesBackground = () => {

  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  }, [])

  return (
    <div>
      <Particles
        id="tsparticles"
        options={particleConfig}
        init={particlesInit}
      />
    </div>
  );
};

export default ParticlesBackground;
