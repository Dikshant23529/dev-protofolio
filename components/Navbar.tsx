import React from 'react'


const Navbar = () => {
    return (
        <nav className='grid grid-cols-3 mt-4 mb-0 px-8'>
            <div className='flex' style={{ background: '#0C0E23', color: '#ffffff', alignItems: 'center' }}>
                <p className='text-lg uppercase font-bold'>
                Dev-Protofolio
                </p>
            </div>
            <div className='rounded-xl shadow-2xl' style={{ background: 'linear-gradient(#04071D, #0C0E23)', color: '#ffffff', border: '2px solid #6971A266' }}>
                <ul className='flex gap-4 justify-around py-4' style={{ letterSpacing: '-0.48px', fontSize: '16px', fontWeight: '500' }}>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Testmonials</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Blogs</a></li>
                </ul>
            </div>

            <div className='flex justify-end gap-4' style={{ background: '#0C0E23', color: '#ffffff' }}>
                <button className='px-3 text-base text-center rounded-md' style={{ background: 'linear-gradient(#04071D, #0C0E23)', color: '#ffffff', alignItems: 'center', border: '2px solid #6971A266' }}>
                    Login
                </button> <button className='px-3 text-base text-center rounded-md' style={{ background: 'linear-gradient(#04071D, #0C0E23)', color: '#ffffff', alignItems: 'center', border: '2px solid #6971A266' }}>
                    Register
                </button>
            </div>
        </nav>
    )
}

export default Navbar