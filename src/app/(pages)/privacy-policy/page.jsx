import SparkleText from "@/components/helper/SparkleText";
import Hero from "@/components/ui/Hero";
import PrivacyPolicy from "./PrivacyPolicy";
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
