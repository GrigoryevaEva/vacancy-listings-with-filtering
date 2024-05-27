import { useAppDispatch, useAppSelector } from '../../../../shared/lib/store'
import { addFilter } from '../../model/filterSlice'
import { selectFilters } from '../../model/selectors'

import style from './tagsField.module.scss'

interface ITagsFieldProps {
  readonly id: number
  readonly languages: string[]
  readonly tools: string[]
  readonly level: string
  readonly role: string
}

export const TagsField = (props: ITagsFieldProps) => {

  const dispatch = useAppDispatch()

  const filters = useAppSelector(selectFilters)

  const selectTag = (filters: string[], tag: string) => (
    filters.includes(tag)
  )

  const tags = props.languages.concat(props.tools, props.level, props.role)

  const renderTags = (tags: string[]) => (
    tags.map((tag) => (
      <button 
        className={`${style.tag} ${selectTag(filters, tag) ? style.tag_select : ''}`}
        key={`${props.id}_${tag}`} 
        onClick={() => dispatch(addFilter(tag))}
      >
        {tag}
      </button>
    ))
  )

  return (
    <div className={style.root}>
      {renderTags(tags)}
    </div>
  )
}
