import { sleekTransition } from "./motion-utils";

export const buttonVariants = {
  magnetic: {
    // Logic for Magnetic variant
    // This will likely be used in use-magnetic.ts or directly in the component
    transition: sleekTransition.snappy,
  },
  shine: {
    // Logic for Shine variant
    transition: sleekTransition.snappy,
  },
  loadingMorph: {
    // Logic for Loading Morph
    transition: sleekTransition.smooth,
  },
  expandableIcon: {
    // Logic for Expandable Icon
    transition: sleekTransition.snappy,
  },
  threeDPress: {
    // Logic for 3D Press
    whileTap: { y: 2 },
    transition: sleekTransition.snappy,
  },
};
