import Layout from '../../components/layout';

// export type MainScreenProps = {};

export default function MainScreen(): JSX.Element {
  return (
    <Layout>
      <article className="main">
        <div className="main__title">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <use xlinkHref="#wfm-black"></use>
          </svg>
          <h1 className="main__title-text title-reset">WFM</h1>
        </div>
        <div className="main__table-controls table-controls">
          <div className="table-controls__date">
            <button className="table-controls__date-left-btn btn-reset">&lt;</button>
            <button className="table-controls__calendar-btn btn-reset">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
                <use xlinkHref="#calendar"></use>
              </svg>
            </button>
            <button className="table-controls__date-right-btn btn-reset">&gt;</button>
          </div>
          <div className="table-controls__right">
            <input className="table-controls__filter" name="filter" type="text" placeholder="Фильтр" id="filter" />
            <select className="table-controls__selector">
              <option>Опция 1</option>
              <option>Опция 2</option>
              <option>Опция 3</option>
            </select>
            <button className="table-controls__settings btn-reset">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                <use xlinkHref="#settings"></use>
              </svg>
            </button>
          </div>
        </div>
        <table className="main__table">
          <thead className="main__table-head">
            <tr className="main__table-row">
              <th className="main__table-head-cell main__table-head-cell--first"></th>
              <th className="main__table-head-cell">ПН</th>
              <th className="main__table-head-cell">ВТ</th>
              <th className="main__table-head-cell">СР</th>
              <th className="main__table-head-cell">ЧТ</th>
              <th className="main__table-head-cell">ПТ</th>
              <th className="main__table-head-cell">СБ</th>
              <th className="main__table-head-cell">ВС</th>
            </tr>
          </thead>
          <tbody className="main__table-body">
            <tr className="main__table-row">
              <td className="main__table-body-cell main__table-body-cell--first"></td>
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
            </tr>
          </tbody>
        </table>
      </article>
    </Layout>
  );
}
