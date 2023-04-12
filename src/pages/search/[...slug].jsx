
import { useRouter} from "next/router";

function Search(context) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query)
  console.log(context)
  return (
    <div>
      <p className="text-black">{slug}</p>
    </div>
  );
}

export default Search;

export async function getStaticProps(context) {
  return {
    props: {
      data: context.params
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}