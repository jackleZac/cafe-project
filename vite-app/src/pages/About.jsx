

function About() {
  return (
    <div className="w-full bg-[#c6c0b7]">
      <div className="relative w-100 flex flex-row">
        <div className="basis-3/4">
          <div className="p-16 flex flex-row">
            <div className="mt-4 p-16">
              <h1 className="font-semibold text-lg">OUR STORY</h1>
              <p className="text-justify mt-2">From the robust intensity of our espresso shots to the creamy allure of specialty lattes, each cup is an invitation to savor the finest beans sourced from around the world. Step into our cozy and inviting space, designed to be the perfect backdrop for both casual coffee catch-ups and focused work sessions.</p>
            </div>
            <div className="mt-4 p-16">
              <h2 className="font-semibold">What Makes Us Unique</h2>
              <p className="text-justify mt-2">Our wraps are a fusion of global flavors, offering a range from Mediterranean-inspired falafel wraps to zesty Mexican chicken wraps. Fresh, locally sourced ingredients are folded into warm, pillowy wraps, creating a symphony of tastes and textures that will tantalize your taste buds.</p>
            </div>
          </div>
        </div>
        <div className="basis-1/4">
          PICTURE
        </div>
      </div>
      <div className="relative w-100">
      <table border="1">
            <tr>
              <th>Day</th>
              <th>OPEN</th>
              <th>CLOSE</th>
            </tr>
            <tr>
              <td>Monday</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Friday</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td></td>
              <td></td>
            </tr>
          </table>
      </div>
    </div>
  )
}

export default About