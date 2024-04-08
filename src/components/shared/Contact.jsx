import SparkleText from "../helper/SparkleText";
import Form from "./Form";

export default function Contact({ className, title, subTitle }) {
    return (
        <section className={className}>
            <div className="mx-auto text-center w-11/12 md:w-1/2">
                <h2 className="mb-2"><SparkleText text={title || 'Get in Touch'} /></h2>
                <p className="">{subTitle || 'Reach out to us for any inquiries or assistance'}</p>
            </div>
            <Form />
        </section>
    )
}
