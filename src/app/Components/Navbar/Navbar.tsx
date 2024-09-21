
const Navbar = () => {
  return (
    <nav className="bg-orange-200">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="/" className="block rounded-md px-3 py-2  font-medium text-black hover:bg-orange-500 hover:text-white italic text-xl" aria-current="page">Home</a>
            <a href="/Components/Courses&Fees" className="rounded-md px-3 py-2 text-xl font-medium text-black hover:bg-orange-500 hover:text-white italic">Courses&Fees</a>
            <a href="/Components/Cutoff" className="rounded-md px-3 py-2 text-xl font-medium text-black hover:bg-orange-500 hover:text-white italic">Cutoff</a>
            <a href="/Components/Gallery" className="rounded-md px-3 py-2 text-xl font-medium text-black hover:bg-orange-500 hover:text-white italic">Gallery</a>
            <a href="/Components/Placement" className="rounded-md px-3 py-2 text-xl font-medium text-black hover:bg-orange-500 hover:text-white italic">Placement</a>
            <a href="/Components/Ranking" className="rounded-md px-3 py-2 text-xl font-medium text-black hover:bg-orange-500 hover:text-white italic">Ranking</a>
            <a href="/Components/About" className="rounded-md px-3 py-2 text-xl font-medium text-black hover:bg-orange-500 hover:text-white italic">About</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="/" className=" block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-orange-500 hover:text-white" aria-current="page">Home</a>
      <a href="/Components/Courses&Fees" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-orange-500 hover:text-white">Courses&Fees</a>
      <a href="/Components/Cutoff" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-orange-500 hover:text-white">Cutoff</a>
      <a href="/Components/Gallery" className="block rounded-md px-3 py-2  text-base font-medium text-black hover:bg-orange-500 hover:text-white">Gallery</a>
      <a href="/Components/Placement" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-orange-500 hover:text-white">Placement</a>
      <a href="/Components/Ranking" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-orange-500 hover:text-white">Ranking</a>
      <a href="/Components/About" className="block rounded-md px-3 py-2  text-base font-medium text-black hover:bg-orange-500 hover:text-white">About</a>
    </div>
  </div>
</nav>
  )
}

export default Navbar