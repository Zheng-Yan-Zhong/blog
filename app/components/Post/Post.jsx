import style from "./post.module.css";
// import Image from "next/image";
export default function Post() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>test</h2>
      <div className={style.author}>
        <span className={style.name}>Dennis Zheng</span>
        <span className={style.time}>2023-10-24</span>
      </div>
      <p className={style.content}>
        <a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          sapiente deserunt dolor vel, dolorum laborum unde fuga voluptate
          facilis. Commodi, iure culpa mollitia doloribus illum reprehenderit
          veniam excepturi facere et. Dolorum illo repudiandae, iusto earum
          voluptatum debitis eligendi magnam at provident harum exercitationem
          saepe cum eius ratione, accusantium error? Iure sapiente, expedita
          debitis asperiores minus aliquam magnam necessitatibus atque
          blanditiis! Ipsa quaerat harum inventore exercitationem quam mollitia.
          Officiis error voluptas quod placeat, natus aut odit omnis earum?
          Quasi temporibus, dicta atque similique eos, culpa molestias
          doloremque, at impedit nulla nemo? Voluptates ab a quaerat aliquid
          tenetur nam neque dignissimos laboriosam architecto est! Esse fugiat
          ex nihil voluptatem quibusdam maiores, ut a reprehenderit autem velit
          saepe. Quisquam soluta unde quam autem. Nostrum consequuntur
          voluptates veniam rerum sunt nemo tempora, animi impedit voluptatum
          harum beatae enim recusandae exercitationem veritatis fuga nesciunt
          dolorem deserunt, ad tempore suscipit saepe, consequatur repellat.
          Iure, ut similique.
        </a>
      </p>
      <img className={style.image} src="https://fakeimg.pl/300/" />
      <ul className={style.tags}>
        <a className={style.tag}>js</a>
        <a className={style.tag}>backend</a>
      </ul>
    </div>
  );
}
