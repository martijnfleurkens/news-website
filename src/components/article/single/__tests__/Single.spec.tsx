import { describe, it, expect, vi, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Single from '../Single'
import { Article } from '../../../../types/News.types.js'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

//Testdata example for component
const mockArticleReturn: Article = {
  id: '8015699',
  title: 'The story behind the Table Snip',
  popularity: 0.129,
  timestamp: '2023-02-16T07:39:55.793Z'
}

describe('Single', () => {
  describe('when all data is passed through', () => {
    //Render
    beforeEach(() => {
      render(<Single article={mockArticleReturn} />, { wrapper: BrowserRouter })
    })

    it('should render page content correct', () => {
      expect(screen).toBeTruthy()
    })

    it('should contain the title', () => {
      expect(screen.getByText(mockArticleReturn.title)).toBeInTheDocument()
    })

    it('should contain the correct link', () => {
      expect(screen.getByText(mockArticleReturn.title).closest('a')).toHaveAttribute(
        'href',
        '/article/' + mockArticleReturn.id
      )
    })

    test('if link is clickable', async () => {
      //Setup
      const user = userEvent.setup()
      const spyAnchorTag = vi.spyOn(user, 'click')

      //Find title and click
      await user.click(screen.getByText(mockArticleReturn.title))

      //Register if clicked once
      expect(spyAnchorTag).toHaveBeenCalledOnce()
    })
  })
})
