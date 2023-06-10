import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Grid, GridBox, Overlay } from './styles.tsx';

const overlay = {
  hidden: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  visible: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};

const Final = () => {
  const [id, setId] = useState<null | string>(null);

  return (
    <>
      <Grid>
        {['1', '2', '3', '4'].map((n) => (
          <GridBox onClick={() => setId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay variants={overlay} onClick={() => setId(null)} initial="hidden" animate="visible" exit="exit">
            <GridBox layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Final;
