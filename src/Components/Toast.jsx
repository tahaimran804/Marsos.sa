"use client"

import { Toaster } from 'react-hot-toast';
function Toast() {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  );
}
export default Toast;
