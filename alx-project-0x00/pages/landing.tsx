import Card from "@/components/Card"
import Button from "@/components/button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="mt-10 space-y-6">

        {/* Small Buttons */}
        <div className="space-x-4">
          <Button title="Small - Rounded-sm" styles="text-sm rounded-sm" />
          <Button title="Small - Rounded-md" styles="text-sm rounded-md" />
          <Button title="Small - Rounded-full" styles="text-sm rounded-full" />
        </div>

         {/* Medium Buttons */}
        <div className="space-x-4">
          <Button title="Medium - Rounded-sm" styles="text-base rounded-sm" />
          <Button title="Medium - Rounded-lg" styles="text-base rounded-md" />
          <Button title="Medium - Rounded-full" styles="text-base rounded-full" />
        </div>

        {/* Large Buttons */}
        <div className="space-x-4">
          <Button
            title="Large - Rounded-sm"
            styles="text-lg rounded-sm px-6 py-3"
          />
          <Button
            title="Large - Rounded-lg"
            styles="text-lg rounded-md px-6 py-3"
          />
            <Button
            title="Large - Rounded-full"
            styles="text-lg rounded-full px-6 py-3"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
