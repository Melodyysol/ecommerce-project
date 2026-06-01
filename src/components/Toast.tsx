import { FaTimes } from "react-icons/fa"
import { motion, useAnimation } from 'motion/react';
import { useEffect, useState } from "react";

const Toast = (
  { message, type, onClose }:
    {
      message: string;
      type: 'error' | 'success'
      onClose: () => void
    }) => {

  const [isPause, setIsPause] = useState<boolean>(false);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      width: 0,
      transition: { duration: 3.5, ease: 'linear' }
    })
  }, [controls])

  useEffect(() => {
    if (isPause) {
      controls.stop()
      return;
    } else {
      controls.start({
        width: 0,
        transition: { duration: 3.5, ease: 'linear' }
      })
    }

  }, [isPause, controls])

  

  return (
      <motion.div
        onAnimationComplete={onClose}
        onMouseEnter={() => setIsPause(true)}
        onMouseLeave={() => setIsPause(false)}
        className="w-70 rounded bg-white shadow-md mx-auto pointer-events-auto">
        <div className="relative items-center flex gap-4 py-4 pl-3 rounded border border-gray-100">
          <div className={`${type === 'error' ? 'bg-red-500 ' : 'bg-green-500 '} h-5 w-5 rounded-full text-white text-center`}>!</div>
          <p>{message}</p>
          <FaTimes
            onClick={onClose}
            className="absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-gray-700 transition-all duration-500" />
          <motion.div
            initial={{ width: '100%' }}
            animate={controls}
            className={`h-1 ${type === 'error' ? 'bg-red-500 ' : 'bg-green-500 '} absolute bottom-0 left-0 rounded-bl`}></motion.div>
        </div>
      </motion.div>
  )
}

export default Toast
