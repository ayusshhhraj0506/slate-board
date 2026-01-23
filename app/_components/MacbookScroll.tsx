import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";

export function MacbookScrollDemo() {
    return (
        <div className="w-full overflow-hidden ">
            <MacbookScroll
                badge={
                    <a href="https://github.com/ayusshhhraj0506">
                        <Badge className="h-10 w-10 -rotate-12 transform" />
                    </a>
                }
                src={`/logo/bg-scroll.avif`}
                showGradient={false}
            />
        </div>
    );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
    return (
        <Image src="/logo/github-icon-1.svg" alt="github" width={50} height={50} />
    );
};
