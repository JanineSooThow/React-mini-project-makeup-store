import Link from "next/link"
import "~bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
    return (
        <header>
            <Link href={'/'}>Makeup Mirage</Link>
            <nav>
              <Link href={'/'}>Home</Link>
              <Link href={'/products'}>All products</Link>
              <Link href={'/brands'}>Brands</Link>
              <Link href={'/categories'}>Categories</Link>
              <Link href={'/sale'}>Sale</Link>
              <Link href={'/account'}>Account</Link>
              <Link href={'/wishlist'}>Wishlist</Link>
              <Link href={'/cart'}>Cart (0) </Link>
            </nav>
        </header>)
    };

