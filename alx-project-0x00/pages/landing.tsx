import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Buttons Section */}
      <div className="mt-10 space-x-4">
          <Button title="Small Rounded" styles="bg-blue-500 text-sm rounded-sm" />
          <Button title="Medium Rounded" styles="bg-green-500 text-base rounded-md" />
          <Button title="Large Rounded" styles="bg-red-500 text-lg rounded-full" />
          <Button title="Rounded LG" styles="bg-purple-500 text-lg rounded-lg" />
      </div>
    </div>
  );
};

export default Landing;
