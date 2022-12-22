const Searchbar = ({placeholder,onchange_func,value}) => {
return (
<div className="searchbarstyle form-outline">
  <input type="search" id="form1" class="form-control searchstyle" placeholder={placeholder} onChange = {onchange_func} aria-label="Search" value={value} />

</div>
)
}
export default Searchbar