export function getItemsFromTheViewedStorage() {
  return JSON.parse(localStorage.getItem('viewedItems')) || []
}

export function addItemToTheViewedStorage(item) {
  const viewedItems = JSON.parse(localStorage.getItem('viewedItems')) || []
  if (!viewedItems.includes(item)) {
    viewedItems.push(item)
    localStorage.setItem('viewedItems', JSON.stringify(viewedItems))
  }
}

export function removeItemFromTheViewedStorage(item) {
  const viewedItems = JSON.parse(localStorage.getItem('viewedItems')) || []
  if (viewedItems.includes(item)) {
    viewedItems.splice(viewedItems.indexOf(item), 1)
    localStorage.setItem('viewedItems', JSON.stringify(viewedItems))
  }
}

export default function viewerManager() {
  document.querySelectorAll('.post-viewed').forEach(($input) => {
    const value = $input.value
    const viewedItems = getItemsFromTheViewedStorage()
    $input.checked = viewedItems.includes(value)

    $input.addEventListener('change', (event) => {
      const value = event.target.value
      const isChecked = event.target.checked
      if (isChecked) {
        addItemToTheViewedStorage(value)
      } else {
        removeItemFromTheViewedStorage(value)
      }
    })
  })
}
