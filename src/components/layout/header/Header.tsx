const Header = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <a href="#" title="" className="">
                <img
                  className="block w-auto h-12"
                  src="https://media.discordapp.net/attachments/1226504527163949066/1236494354516934717/Logo01.png?ex=67ebee5b&is=67ea9cdb&hm=446496b368d3f135b8cbc8fdee8d51979cb9fd7c69ae756b4f4d3b32a19be99a&=&format=webp&quality=lossless"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
