import Image from "next/image";
import Button from "../common/button";

const SuccessStories = () => {

    const successStories = [
        {
            name: "Ghostwriting Services",
            desc: "Have a story in mind but need help writing it? Our ghostwriters turn your ideas into a polished children’s book—while you remain the author. Get your story written in your voice, just the way you imagined.",
        },
        {
            name: "Book Publishing",
            desc: "With our publishing service, we handle everything—writing, editing, formatting, and publishing. Your book will be ready for the world on any platform you choose.",
        },
        {
            name: "Book Cover Design",
            desc: "Your cover is the first thing readers notice. Our designers create eye-catching, professional covers that match your story and genre—helping your book stand out instantly.",
        },
        {
            name: "Audio Books",
            desc: "Bring your book to life with our audiobook services. We provide high-quality narration and production to turn your story into an engaging audio experience for listeners everywhere.",
        },
        {
            name: "Book Formatting",
            desc: "Professional formatting makes your book easier to read. We format both eBooks and print books to perfection—ready for every platform and device.",
        },
        {
            name: "Book Marketing",
            desc: "Reaching readers is essential. Our marketing services promote your book across key platforms with targeted strategies that boost visibility and sales.",
        },
    ]

    return (
        <div className="relative py-10 bg-[#F3F3F3]">
            <div className="absolute top-0 left-0 w-[10%]">
                <Image src="/images/publishtop.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="absolute top-0 left-[8%] w-[12%]">
                <Image src="/images/publishpaperstar.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="absolute bottom-0 left-[5%] w-[12%]">
                <Image src="/images/publishbookface.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="absolute top-0 right-0 w-[12%]">
                <Image src="/images/publishright.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="absolute bottom-0 right-0 w-[12%]">
                <Image src="/images/publisherbottombookface.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="container">
                <div className="font-childhood text-black text-[60px] text-center">Success Stories from Our Authors</div>
            </div>
        </div>
    )
}

export default SuccessStories;