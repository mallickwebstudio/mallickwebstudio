import Hero from "@/components/other/hero";
import SparkleText from "@/components/other/sparkle-text";
import PrivacyPolicy from "./privacy-policy";
import { privacyPolicyMd } from "@/lib/datas/metaDatas";

export const metadata = privacyPolicyMd;

export default function page() {
  return (
    <main>
      <Hero heading={<><SparkleText text="Privacy" /><SparkleText text="-" /><SparkleText text="Policy" /></>} />
      <PrivacyPolicy />
    </main>
  )
}
