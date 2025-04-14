import './Filter.css'
import { useState } from 'react'

const Filter = ({ newTaskList }) => {
  const [selectedtag, setSelectedtag] = useState("")

  const tags = ["Health", "Education", "Sports", "Travel", "Others", "Entertainment"]

  const handleTabClick = (tag) => {
    setSelectedtag(prev => (prev === tag ? "" : tag))
  }

  const filteredTasks = selectedtag
    ? newTaskList.filter(task => task.tag === selectedtag)
    : newTaskList

  return (
    <div className='filter-container'>
      <h1 className="task-heading">Tags</h1>
      <div className='tabs-container'>
        {tags.map(tag => (
          <button
            key={tag}
            type="button"
            className={`tab-button ${selectedtag === tag ? 'active-tab' : ''}`}
            onClick={() => handleTabClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className='container'>
        {filteredTasks.length > 0 ? (
          <div className="task-list">
            {filteredTasks.map(task => (
              <div className="task-card" key={task.id}>
                <p>{task.task}</p>
                <p><span className="tag-button">{task.tag}</span></p>
              </div>
            ))}
          </div>
        ) : (
          <p>No tasks found for selected tag.</p>
        )}
      </div>
    </div>
  )
}

export default Filter


