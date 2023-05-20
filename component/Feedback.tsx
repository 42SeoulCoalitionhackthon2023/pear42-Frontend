import { useEffect, useState } from 'react';
import styles from '/styles/Feedback.module.scss';

type Feedback = {
  corrector: string;
  corrected: string;
  finalMark: number;
  comment: string;
  feedback: string;
  flag: boolean;
  projectName: string;
  createdAt: string;
  pid: number;
};

export default function Feedback() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/feedback')
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data);
      });
  }, []);

  return (
    <div className={styles.feedbackWrap}>
      <div className={styles.selectWrap}>
        <div className={styles.feedbackTitle}>Feedback Log</div>
        <select className={styles.select}>
          <option>Circle</option>
        </select>
        <select className={styles.select}>
          <option>Subject</option>
        </select>
        <button className={styles.select}>Search</button>
      </div>
      <div>
        {feedback.map((log, index) => {
          return (
            <div key={log.pid} className={styles.logWrap}>
              <div>
                <div>
                  {log.corrector} evaluated {log.corrected} scheduled on{' '}
                  {new Date(log.createdAt).toLocaleDateString('kr-KR', {
                    day: 'numeric',
                    year: 'numeric',
                    month: 'long',
                  })}
                  {` `}
                  {new Date(log.createdAt)
                    .toLocaleTimeString()
                    .split(':')
                    .slice(0, 2)
                    .join(':')}
                  <div>{log.projectName}</div>
                </div>
                <div>
                  <div
                    className={
                      log.finalMark > 79 ? styles.color3 : styles.color4
                    }
                  >
                    {log.finalMark}%
                  </div>
                  <div>{log.feedback}</div>
                  <div>{log.comment}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
