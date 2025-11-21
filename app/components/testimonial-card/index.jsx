// import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl px-4 py-8 testimonail-card">
      <div className="p-0 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/userimage.png"
              width={50}
              height={50}
              alt="Profile"
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg text-white">Alex Y</h3>
              <div className="flex text-yellow-400">
                {/* {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))} */}
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/colons.png"
              width={40}
              height={40}
              alt="Profile"
              className=""
            />
          </div>
        </div>

        <p className="text-sm text-white/90 leading-relaxed">
          I&apos;ve been dreaming of writing a book for years, but I didn&apos;t
          have the time or expertise. That&apos;s where Hollywood Books
          Publisher came to the rescue. Their ghostwriters are pure magic! They
          took my vague ideas and transformed them into a captivating story. And
          the book cover? It&apos;s like a work of art. They genuinely want you
          to succeed and work tirelessly to make your vision a reality.
        </p>
      </div>
    </div>
  );
}
