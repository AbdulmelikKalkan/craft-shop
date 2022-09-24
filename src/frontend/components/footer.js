import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer(){
    return (
      <footer className="flex flex-col items-center justify-center border-t bg-rose-600">
        <p>This website is hosted for demo purposes only. It is not an actual shop.</p>
        <p className="pt-1.5">&copy; 2022 Abdulmelik Kalkan</p>
      </footer>
    )
}