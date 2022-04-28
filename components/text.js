#!/usr/bin/env node

/* eslint-disable @next/next/no-img-element */

// https://codepen.io/dudleystorey/pen/yNxPRy

const Text = () => (
  <div className="text-body w-full bg-blue-400 min-h-screen items-center justify-center p-20">
    <p>{`Rank grass, waist high, grows upon the plain of Phutra&mdash;the gorgeous flowering grass of the inner world, each particular blade of which is tipped with a tiny, five-pointed blossom&mdash;brilliant little stars of varying colors that twinkle in the green foliage to add still another charm to the weird, yet lovely, landscape.`}</p>
    <div id="sticky">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/core.jpg" alt="Visualisation of the Earth's core, showing the planet cut in half with the core bulging from the center" />
      <p>{`The Earth's inner core is a solid ball of iron–nickel alloy with a radius of approximately 1220 kilometers, or about 70% that of the Moon. It is thought to have approximately the same temperature as the surface of the Sun: around 5400°C.`}</p>
    </div>

    <p>{`But then the only aspect which attracted me was the distant hills in which I hoped to find sanctuary, and so I hastened on, trampling the myriad beauties beneath my hurrying feet.  Perry says that the force of gravity is less upon the surface of the inner world than upon that of the outer.  He explained it all to me once, but I was never particularly brilliant in such matters and so most of it has escaped me.  As I recall it the difference is due in some part to the counter-attraction of that portion of the earth's crust directly opposite the spot upon the face of Pellucidar at which one's calculations are being made.  Be that as it may, it always seemed to me that I moved with greater speed and agility within Pellucidar than upon the outer surface&mdash;there was a certain airy lightness of step that was most pleasing, and a feeling of bodily detachment which I can only compare with that occasionally experienced in dreams.`}</p>

    <p>{`And as I crossed Phutra's flower-bespangled plain that time I seemed almost to fly, though how much of the sensation was due to Perry's suggestion and how much to actuality I am sure I do not know.  The more I thought of Perry the less pleasure I took in my new-found freedom. There could be no liberty for me within Pellucidar unless the old man shared it with me, and only the hope that I might find some way to encompass his release kept me from turning back to Phutra.`}</p>

    <p>{`Just how I was to help Perry I could scarce imagine, but I hoped that some fortuitous circumstance might solve the problem for me.  It was quite evident however that little less than a miracle could aid me, for what could I accomplish in this strange world, naked and unarmed?  It was even doubtful that I could retrace my steps to Phutra should I once pass beyond view of the plain, and even were that possible, what aid could I bring to Perry no matter how far I wandered?`}</p>

    <p>{`The case looked more and more hopeless the longer I viewed it, yet with a stubborn persistency I forged ahead toward the foothills.  Behind me no sign of pursuit developed, before me I saw no living thing.  It was as though I moved through a dead and forgotten world.`}</p>
  </div>
)

export default Text
