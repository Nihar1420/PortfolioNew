import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCard';
import { techStack } from '@/data';

const TechStack = () => {
    return (
        <section id="testimonials" className="py-20">
            <h1 className="heading">
                My tech stack and
                <span className="text-purple"> skills learning</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div
                    className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards
                        items={techStack}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </section>
    );
}

export default TechStack