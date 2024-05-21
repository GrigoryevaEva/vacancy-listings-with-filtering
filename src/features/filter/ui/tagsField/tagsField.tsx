import { useAppDispatch } from '../../../../shared/lib/store'
import { addFilter } from '../../model/filterSlice'
import './tagsField.scss'

interface ITagsFieldProps {
  readonly id: number
  readonly languages: string[]
  readonly tools: string[]
}

export const TagsField = (props: ITagsFieldProps) => {

  const dispatch = useAppDispatch()

  const tags = props.languages.concat(props.tools)

  const renderTags = (tags: string[]) => (
    tags.map((tag) => (
      <div 
        key={`${props.id}_${tag}`} 
        onClick={() => dispatch(addFilter(tag))}
      >
        {tag}
      </div>
    ))
  )

  return (
    <div>
      {renderTags(tags)}
    </div>
  )
}
