export default function Footer() {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
      <footer className="w-3/4 bg-slate-300 text-gray-950 dark:bg-gray-900 dark:text-slate-300 text-center p-4 my-5 mx-auto rounded-t-xl">
        <p className="text-sm">&copy; {getYear()} Chidera Odo</p>
        <p>Built with Next.js & Tailwind</p>
      </footer>
    );
  }
  