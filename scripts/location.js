export const location = (locationObj) => {
    return `<section class="card">
    <div><img  class="location__image image--card" src=${locationObj.image}/></div>
    <div class="location">${locationObj.name}</div>
</section>`
}