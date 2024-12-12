"use client";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-screen bg-gray-900">
      <div className="flex flex-col sm:flex-row sm:w-4/5 w-full border-2 border-white rounded-2xl overflow-hidden">
        <Card
          title="STRENGTH"
          imageSrc="https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=600"
          altText="Strength training workout"
          roundedClass="rounded-s-2xl" // Rounded left corners
        />
        <Card
          title="MOBILITY"
          imageSrc="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600"
          altText="Mobility workout"
        />
        <Card
          title="DRILLS"
          imageSrc="https://images.pexels.com/photos/878151/pexels-photo-878151.jpeg?auto=compress&cs=tinysrgb&w=600"
          altText="Drills workout"
          roundedClass="rounded-e-2xl" // Rounded right corners
        />
      </div>
    </div>
  );
}
