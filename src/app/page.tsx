import Link from 'next/link';
import styles from './page.module.css';
import routes from './_routes/router';
export default function Home() {
  return (
    <>
      <div className={`${styles.goToAdminbtn} text-center`}>
        <Link href={routes.dashboard} className="btn btn-lg btn-success">Go to admin dashboard</Link>
      </div>
    </>
  );
}
