import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActiveTabId} = props
  const {displayText, tabId} = tabDetails

  const onClickTabId = () => {
    updateActiveTabId(tabId)
  }
  const activeTabClass = isActiveTabId ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTabId}
        className={`tab-btn ${activeTabClass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
