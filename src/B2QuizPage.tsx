import { useState, useEffect } from 'react';
import './B2QuizPage.css';
import { sampleQuestions } from './b2Data';

export default function B2QuizPage() {
  const [activeTab, setActiveTab] = useState('tips');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(22 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filterCategory, setFilterCategory] = useState('ALL');

  useEffect(() => {
    if (activeTab !== 'quiz' || isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [activeTab, isSubmitted]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');
  };

  const handleSelect = (qId: number, optIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
    setShowExplanation(prev => ({ ...prev, [qId]: true }));
  };

  const calculateResult = () => {
    let score = 0;
    let failedCritical = false;
    sampleQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) score++;
      else if (q.isCritical && selectedAnswers[q.id] !== undefined) failedCritical = true;
    });
    const isPass = score >= 8 && !failedCritical;
    return { score, total: sampleQuestions.length, isPass, failedCritical };
  };

  const result = calculateResult();
  const currentQ = sampleQuestions[currentIdx];
  const filteredQuestions = filterCategory === 'ALL' ? sampleQuestions : sampleQuestions.filter(q => q.category === filterCategory);

  return (
    <div className="b2-container">
      <div className="b2-header">
        <h1>🚗 BỘ BÍ KÍP MẸO THI LÝ THUYẾT LÁI XE Ô TÔ HẠNG B (B1, B2, B)</h1>
        <p>Tối Ưu Cho Bộ 600 Câu Hỏi Mới Nhất - Dễ Nhớ, Chọn Đúng 100%</p>
      </div>

      <div className="b2-nav-tabs">
        <button className={'b2-tab-btn ' + (activeTab === 'tips' ? 'active' : '')} onClick={() => setActiveTab('tips')}>💡 Cẩm Nang Mẹo Giải Nhanh</button>
        <button className={'b2-tab-btn ' + (activeTab === 'quiz' ? 'active' : '')} onClick={() => setActiveTab('quiz')}>📝 Đề Thi Trắc Nghiệm Thử</button>
        <button className={'b2-tab-btn ' + (activeTab === 'all' ? 'active' : '')} onClick={() => setActiveTab('all')}>📚 Danh Sách 600 Câu & Mẹo</button>
        <a href="./Meo_Thi_Ly_Thuyet_O_To_Bang_B_Chuan.pdf" target="_blank" rel="noopener noreferrer" className="b2-tab-btn" style={{ background: '#ecfdf5', color: '#047857', borderColor: '#a7f3d0', textDecoration: 'none' }}>📥 Tải PDF Mẹo Thi B2 Chuẩn</a>
      </div>
      {activeTab === 'tips' && (
        <div>
          <div className="b2-tip-section">
            <div className="b2-tip-title">🔥 PHẦN 1: MẸO TỪ KHÓA NHÌN LÀ CHỌN NGAY (ĐÚNG 100%)</div>
            <table className="b2-table">
              <thead><tr><th>Nhóm từ khóa xuất hiện</th><th>Quy tắc chọn nhanh & Lưu ý</th></tr></thead>
              <tbody>
                <tr><td><strong>1. Cấm tuyệt đối</strong></td><td className="b2-highlight-text">Thấy đáp án có cụm: <strong>Bị nghiêm cấm</strong> hoặc <strong>Không được phép / Không được...</strong> ➔ CHỌN NGAY.<br/><em>Ngoại lệ: Xe cảnh sát không phát tín hiệu còi/đèn ➔ Chọn: Được vượt khi đảm bảo an toàn.</em></td></tr>
                <tr><td><strong>2. Hành vi chuẩn mực</strong></td><td>- Đáp án bắt đầu bằng: <strong>Chấp hành...</strong> hoặc <strong>Phải tuân thủ...</strong>.<br/>- Đáp án có: <strong>Về số thấp</strong>, <strong>Về số 1</strong>, <strong>Giảm tốc độ...</strong>, <strong>Đi về phía bên phải</strong>.<br/>- Đáp án có: <strong>Cơ quan có thẩm quyền cấp phép</strong>.</td></tr>
                <tr><td><strong>3. Hiệu lệnh CSGT</strong></td><td>- CSGT giơ 1 tay thẳng đứng ➔ Chọn <strong>Ý 3</strong> (Tất cả dừng lại).<br/>- CSGT giơ 2 tay (hoặc 1 tay ngang) ➔ Chọn <strong>Ý 4</strong> (Trước/sau dừng, trái/phải đi).<br/>- CSGT đứng ở ngã tư trong sa hình ➔ Chọn luôn <strong>Ý 3</strong>.</td></tr>
                <tr><td><strong>4. Đáp án Cả ý 1 và ý 2</strong></td><td>- Ưu tiên chọn khi hỏi về: Đạo đức người lái xe, Văn hóa giao thông, Trách nhiệm của chủ xe.<br/><em>Lưu ý: Không áp dụng nguyên tắc này cho các câu hỏi về Tốc độ hay Kỹ thuật lái xe.</em></td></tr>
              </tbody>
            </table>
          </div>

          <div className="b2-tip-section">
            <div className="b2-tip-title">⚡ PHẦN 2: ĐỘ TUỔI, TỐC ĐỘ VÀ KHOẢNG CÁCH AN TOÀN</div>
            <div className="b2-grid-2">
              <div className="b2-card-tip">
                <h4>🎯 Quy tắc độ tuổi GPLX (Tăng 3 tuổi/hạng)</h4>
                <ul>
                  <li><strong>18 tuổi:</strong> Hạng A1, A2, B1, B2</li>
                  <li><strong>21 tuổi:</strong> Hạng C, FB2</li>
                  <li><strong>24 tuổi:</strong> Hạng D, FC</li>
                  <li><strong>27 tuổi:</strong> Hạng E, FD</li>
                  <li><em>Khác biệt B1 & B2:</em> B1 <strong>KHÔNG</strong> kinh doanh vận tải; B2 <strong>CÓ</strong> kinh doanh vận tải.</li>
                </ul>
              </div>
              <div className="b2-card-tip">
                <h4>🛣️ Tốc độ tối đa trong khu đông dân cư</h4>
                <ul>
                  <li><strong>Đường đôi (có dải phân cách giữa):</strong> Max <strong className="b2-highlight-text">60 km/h</strong></li>
                  <li><strong>Đường 2 chiều (không dải phân cách):</strong> Max <strong className="b2-highlight-text">50 km/h</strong></li>
                </ul>
              </div>
            </div>
            <div className="b2-card-tip" style={{ marginTop: '16px' }}>
              <h4>📏 Khoảng cách an toàn tối thiểu (Đường khô ráo)</h4>
              <p>V = 60 km/h ➔ <strong>35m</strong> | 60 &lt; V ≤ 80 km/h ➔ <strong>55m</strong> | 80 &lt; V ≤ 100 km/h ➔ <strong>70m</strong> | 100 &lt; V ≤ 120 km/h ➔ <strong>100m</strong></p>
            </div>
          </div>

          <div className="b2-tip-section">
            <div className="b2-tip-title">🚦 PHẦN 3: 5 BƯỚC THẦN THÁCH GIẢI BÀI TẬP SA HÌNH</div>
            <div className="b2-grid-2">
              <div className="b2-card-tip">
                <h4>Thứ tự ưu tiên trong Sa Hình:</h4>
                <ol style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.7' }}>
                  <li><strong>Bước 1: Xe đã vào giao lộ</strong> (Vượt qua vạch dừng ➔ Đi trước tiên).</li>
                  <li><strong>Bước 2: Xe ưu tiên:</strong> Chữa cháy ➔ Quân sự ➔ Công an ➔ Cứu thương.</li>
                  <li><strong>Bước 3: Đường ưu tiên:</strong> Xe nằm trên đường có biển báo ưu tiên đi trước.</li>
                  <li><strong>Bước 4: Quyền bên phải trống:</strong> Xe nào bên phải không vướng xe khác ➔ Đi trước.</li>
                  <li><strong>Bước 5: Hướng rẽ ưu tiên:</strong> Rẽ phải ➔ Đi thẳng ➔ Rẽ trái.</li>
                </ol>
              </div>
              <div className="b2-card-tip">
                <h4>💡 Mẹo sa hình nhìn hình đoán ý:</h4>
                <ul>
                  <li>Thấy xe công an / xe chữa cháy ➔ Chắc chắn đáp án đúng nằm ở <strong>Ý 1 hoặc Ý 2</strong>.</li>
                  <li>Sa hình có hình tròn đỏ / vòng xoay ➔ Nhường đường cho xe <strong>bên trái</strong>. Không có vòng xoay ➔ Nhường xe <strong>bên phải</strong>.</li>
                  <li>Sa hình gặp biển hình thoi ngược ➔ Xe bạn đang đứng trên <strong>đường không ưu tiên</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'quiz' && (
        <div>
          <div className="b2-quiz-card">
            <div className="b2-quiz-header">
              <div>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1e3a8a' }}>Câu {currentIdx + 1} / {sampleQuestions.length}</span>
                {currentQ.isCritical && <span className="b2-badge-critical" style={{ marginLeft: '12px' }}>⚠️ CÂU PHẢI ĐÚNG (ĐIỂM LIỆT)</span>}
              </div>
              <div className="b2-timer">⏱️ {formatTime(timeLeft)}</div>
            </div>

            <div className="b2-question-text">{currentQ.question}</div>

            <div className="b2-options-list">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedAnswers[currentQ.id] === oIdx;
                let optClass = 'b2-option-item';
                if (isSubmitted) {
                  if (oIdx === currentQ.answer) optClass += ' correct';
                  else if (isSelected) optClass += ' incorrect';
                } else if (isSelected) {
                  optClass += ' selected';
                }
                return (
                  <div key={oIdx} className={optClass} onClick={() => handleSelect(currentQ.id, oIdx)}>
                    <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid currentColor', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>{String.fromCharCode(65 + oIdx)}</span>
                    <span>{opt}</span>
                  </div>
                );
              })}
            </div>

            {(showExplanation[currentQ.id] || isSubmitted) && (
              <div className="b2-explanation-box"><strong>💡 Mẹo giải nhanh:</strong> {currentQ.explanation}</div>
            )}

            <div className="b2-quiz-actions">
              <button className="b2-btn b2-btn-secondary" onClick={() => currentIdx > 0 && setCurrentIdx(currentIdx - 1)} disabled={currentIdx === 0}>⬅️ Câu Trước</button>
              {!isSubmitted ? (
                <button className="b2-btn b2-btn-success" onClick={() => setIsSubmitted(true)}>✅ Nộp Bài Thi</button>
              ) : (
                <button className="b2-btn b2-btn-secondary" onClick={() => { setSelectedAnswers({}); setShowExplanation({}); setTimeLeft(22 * 60); setIsSubmitted(false); setCurrentIdx(0); }}>🔄 Thi Lại</button>
              )}
              <button className="b2-btn b2-btn-primary" onClick={() => currentIdx < sampleQuestions.length - 1 && setCurrentIdx(currentIdx + 1)} disabled={currentIdx === sampleQuestions.length - 1}>Câu Tiếp ➡️</button>
            </div>
          </div>

          <div className="b2-tip-section">
            <div className="b2-tip-title">📌 Danh Sách Câu Hỏi Bài Thi</div>
            <div className="b2-q-grid">
              {sampleQuestions.map((q, idx) => {
                let numClass = 'b2-q-num';
                if (idx === currentIdx) numClass += ' current';
                else if (isSubmitted) {
                  if (selectedAnswers[q.id] === q.answer) numClass += ' correct-ans';
                  else numClass += ' wrong-ans';
                } else if (selectedAnswers[q.id] !== undefined) {
                  numClass += ' answered';
                }
                return <div key={q.id} className={numClass} onClick={() => setCurrentIdx(idx)}>{idx + 1}</div>;
              })}
            </div>

            {isSubmitted && (
              <div style={{ marginTop: '25px', padding: '20px', borderRadius: '12px', background: result.isPass ? '#ecfdf5' : '#fef2f2', border: '2px solid ' + (result.isPass ? '#10b981' : '#ef4444'), textAlign: 'center' }}>
                <h2 style={{ margin: '0 0 10px', color: result.isPass ? '#047857' : '#b91c1c' }}>{result.isPass ? '🎉 CHÚC MỪNG: BẠN ĐÃ ĐẠT KẾT QUẢ!' : '❌ RẤT TIẾC: BẠN CHƯA ĐẠT!'}</h2>
                <p style={{ fontSize: '1.1rem', margin: '0 0 8px', fontWeight: 'bold' }}>Điểm số: {result.score} / {result.total} câu đúng</p>
                {result.failedCritical && <p style={{ color: '#dc2626', fontWeight: 'bold', margin: 0 }}>⚠️ Bạn đã làm sai câu điểm liệt! Cần đặc biệt chú ý ôn kỹ nhóm câu hỏi điểm liệt.</p>}
              </div>
            )}
          </div>
        </div>
      )}
      {activeTab === 'all' && (
        <div className="b2-tip-section">
          <div className="b2-tip-title" style={{ justifyContent: 'space-between' }}>
            <span>📚 Danh Sách Ôn Tập 600 Câu Lý Thuyết</span>
            <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}>
              <option value="ALL">Toàn bộ chủ đề</option>
              <option value="KhaiNhiem">Khái niệm & Quy tắc</option>
              <option value="VienThong">Tốc độ & Khoảng cách</option>
              <option value="BienBao">Biển báo giao thông</option>
              <option value="SaHinh">Giải bài tập Sa hình</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            {filteredQuestions.map((q, idx) => (
              <div key={q.id} style={{ padding: '20px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.05rem', color: '#0f172a', marginBottom: '10px' }}>Câu {idx + 1}: {q.question}{q.isCritical && <span className="b2-badge-critical" style={{ marginLeft: '10px' }}>ĐIỂM LIỆT</span>}</div>
                <ul style={{ paddingLeft: '20px', margin: '0 0 12px 0' }}>
                  {q.options.map((opt, oIdx) => (
                    <li key={oIdx} style={{ color: oIdx === q.answer ? '#047857' : '#334155', fontWeight: oIdx === q.answer ? 'bold' : 'normal', margin: '4px 0' }}>{opt} {oIdx === q.answer && '✅ (Đáp án đúng)'}</li>
                  ))}
                </ul>
                <div className="b2-explanation-box" style={{ margin: 0 }}>💡 <strong>Mẹo nhớ nhanh:</strong> {q.explanation}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
