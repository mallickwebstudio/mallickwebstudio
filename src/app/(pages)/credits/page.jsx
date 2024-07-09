import SparkleText from "@/components/helper/SparkleText";
import Hero from "@/components/ui/Hero";
import { creditMd } from "@/lib/datas/metaDatas";
import Link from "next/link";

export const metadata = creditMd;

export default function Page() {
  return (
    <>
      <Hero heading={<SparkleText text="Credits" />} />
      <section>
        <div className="section-wrapper">

          <div className="mx-auto w-full md:w-1/2">
            <h2 className="mb-6">Images</h2>
            <p className="flex gap-4 w-full ">
              <span className="block font-medium">Illustrations: </span>
              <Link className="text-link" href="https://www.manypixels.co/gallery" target="_blank">Manypixels</Link>
              <Link className="text-link" href="https://themeisle.com/illustrations/" target="_blank">Themeisle</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
