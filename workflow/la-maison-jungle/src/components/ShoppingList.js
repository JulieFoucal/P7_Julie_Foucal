import { plantList } from '../datas/plantList'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
		</div>
	)
}

{plantList.map((plant) => (
        <li key={ plant.id }>
            {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
        </li>
    ))}

export default ShoppingList