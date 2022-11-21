import { createClient } from 'contentful';
import Link from 'next/link';

// export async function getStaticProps() {
//   const client = createClient({
//     space: 'i178fmhphxpq',
//     accessToken: 'vm5p_nDkZ_bV_dqMM2Yeyc5RitEKMxdC6a7xnpIefLU',
//   });

//   console.log(client);

//   const result = await client.getEntries({ content_type: 'project' });

//   return {
//     props: {
//       items: result.items,
//     },
//   };
// }

const Navigation = ({ items }) => {
  console.log('here are the items:', items);
  return (
    <nav>
      <ul>
        <li>Thing here</li>
        {items &&
          items.map((item) => (
            <li key={item.sys.id}>
              <Link href={`/project/${item.fields.slug}`}>
                {item.fields.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
