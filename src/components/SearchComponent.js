import React, { Component } from 'react';
import '../css/SearchComponent.css'
            
class SearchComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dropdownStatus: "collapsed"
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this)
  }

  toggleDropdown = (newState) => {
    this.setState({
      dropdownStatus: newState
    })
  }

  toggleDropdownMenu() {
    if (this.state.dropdownStatus === "collapsed") {
      this.toggleDropdown("expanded")
    } else if (this.state.dropdownStatus === "expanded") {
      this.toggleDropdown("collapsed")
    }
  }

  render(props) {
    return (
      <div id="search-component" className="">
        <div id="input-group" className="flex-row justify-center">
          <input
            id="search-input"
            type="text"
            className=""
            aria-label="Search Recipes"
            onChange={ e => this.props.searchList(e.target.value)}
          />
          <div className="flex-column justify-end">
            <button
              type="button"
              className="btn-primary"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={this.toggleDropdownMenu}
            >
              Sort by: <span className="caret" />
            </button>

            <div className={'dropdown-list flex-column ' + 
              (this.state.dropdownStatus === 'expanded' ? 'active' : '')}
            >
              <button className={'dropdown-item ' + 
                  (this.props.orderBy === 'mealType' ? 'active-sort' : '' )}
                  onClick={e => this.props.changeOrder('mealType', this.props.orderDir)}
                  href="#">
                  Upcoming Meal
              </button>
              <button className={'dropdown-item ' + 
                  (this.props.orderBy === 'totalTime' ? 'active-sort' : '' )}
                  onClick={e => this.props.changeOrder('totalTime', this.props.orderDir)}
                  href="#">
                  Total Time
              </button>
              <button className={'dropdown-item ' + 
                  (this.props.orderBy === 'servingSize' ? 'active-sort' : '' )}
                  onClick={e => this.props.changeOrder('servingSize', this.props.orderDir)}
                  href="#">
                  Serving Size
              </button>
              <button className={'dropdown-item ' + 
                  (this.props.orderBy === 'alphabetical' ? 'active-sort' : '' )}
                  onClick={e => this.props.changeOrder('alphabetical', this.props.orderDir)}
                  href="#">
                  Alphabetical
              </button>
              <div role="separator" className="flex-column dropdown-divider">
                <button className={'dropdown-item ' + 
                    (this.props.orderDir === 'asc' ? 'active-sort' : '' )}
                    onClick={e => this.props.changeOrder(this.props.orderBy, 'asc')}
                    href="#">
                    Asc
                </button>
                <button className={'dropdown-item ' + 
                    (this.props.orderDir === 'desc' ? 'active-sort' : '' )}
                    onClick={e => this.props.changeOrder(this.props.orderBy, 'desc')}
                    href="#">
                    Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchComponent

  // TO SET UP SORTING FUNCTIONALITY
      // Add to state of the parent file
        // this.state = {
        //   orderBy: 'sortByThisVariable',
        //   orderDir: 'asc'
        // }

      // Add to render(), just before return()
        // Create a temp variable for the "order" of the list
          // let order;

        // Create a temp variable to filter to takes from the fullList that is held in state
          // let filteredList = this.state.fullList;

        // An IF statement that depending on the value of the orderDir, will modify our order variable
          // if (this.state.orderDir === 'asc') {
          //   order = 1;
          // } else {
          //   order = -1;
          // }

        // Use the JS sort() method to compare the items in the filteredList with one another and place them in the proper order
          // filteredList.sort((a,b) => {
          //   if (a[this.state.orderBy].toLowerCase() <
          //       b[this.state.orderBy].toLowerCase()
          //   ) {
          //     return -1 * order;
          //   } else {
          //     return 1 * order;
          //   }
          // })

        // To the component that is displaying the list, add the following (prop)
          // <ListDisplayingComponent 
          //   filteredList = {filteredList}
          // /> 

        // Add to <SearchComponent /> in the parent component
          // <SearchComponent 
          //   orderBy={props.orderBy}
          //   orderDir={props.orderDir}
          // />

        // To the parent component, add the following functions to setState for sorting update changes
          // changeOrder = (newOrder, newDir) => {
          //   this.setState({
          //     orderBy: newOrder,
          //     orderDir: newDir
          //   })
          // }

        // .bind(this) the changeOrder() within the constructor of the parent component
          // this.changeOrder = this.changeOrder.bind(this);
    
    
  // TO SET UP SEARCH FUNCTIONALITY
      // 