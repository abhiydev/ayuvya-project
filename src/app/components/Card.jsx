"use client";
import Image from "next/image";
import icon from "@/app/images/next.svg"; // Update the path to match your project structure
import Link from "next/link";
import { useState } from "react";

export default function Card({ title, imageSrc, altText, roundedClass, index }) {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Store the last hovered index

    const isHovered = hoveredIndex === index; // Check if this card is the last hovered card

    return (
        <div
            className={`flex sm:flex-row flex-col relative transition-all duration-300 sm:h-96 h-36 justify-center ${isHovered ? "sm:w-screen" : "sm:w-1/3"
                }`}
            onPointerEnter={() => {
                // Only reset if entering a new card

                isHovered === index ? setHoveredIndex(null) : setHoveredIndex(index)
            }}
            onPointerLeave={() => {
                isHovered !== index ? setHoveredIndex(null) : setHoveredIndex(index)
            }}
        >
            {/* Title and Link */}
            <div className="absolute w-full flex justify-between items-center px-4 py-2 z-10">
                <h2 className="text-white font-medium text-lg truncate">{title}</h2>
                {isHovered && ( // Show the icon only when hovered
                    <Link
                        href="https://abhishek-chedwal-eta-ten.vercel.app/projects"
                        className="relative p-1"
                    >
                        <Image src={icon} alt={`${title} icon`} height={16} width={16} />
                    </Link>
                )}
            </div>

            {/* Image */}
            <Link
                href="https://abhishek-chedwal-eta-ten.vercel.app/projects"
                className="w-full h-full"
            >
                <Image
                    src={imageSrc}
                    alt={altText}
                    fill
                    className={`${roundedClass} object-cover transition-all duration-300`}
                />
            </Link>
        </div>
    );
}
