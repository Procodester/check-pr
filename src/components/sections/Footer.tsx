import React from 'react'

function Footer() {
    return (
        <footer className="w-full ">
            
                <p className='text-center py-5 text-xs md:text-sm text-muted-foreground'>
                    &copy; {new Date().getFullYear()} Devansh &middot;{" "}
                    <a href="mailto:devansh.jb01@gmail.com" className="hover:underline">
                        devansh.jb01@gmail.com
                    </a>
                </p>
        </footer>
    )
}

export default Footer