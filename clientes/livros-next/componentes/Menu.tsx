import Link from "next/link"

/*
Menu com navegação entre as páginas
*/

export default function Menu() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-collapse">
        <Link className="navbar-brand" href='/'>Home</Link>
        <Link className="navbar-brand" href='/LivroLista'>Catálogo</Link>
        <Link className="navbar-brand" href='/LivroDados'>Novo</Link>
      </div>

    </nav>
  )
}