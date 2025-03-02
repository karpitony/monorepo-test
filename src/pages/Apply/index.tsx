import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Application from "./Application/Application";

export default function Apply() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Step1 setStep={setStep} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            exit={{ opacity: 0 }}
          >
            <Step2 setStep={setStep} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            exit={{ opacity: 0 }}
          >
            <Application />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
