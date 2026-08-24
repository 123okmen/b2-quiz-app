export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  category: 'KhaiNhiem' | 'VienThong' | 'BienBao' | 'SaHinh' | 'KyThuat';
  isCritical?: boolean;
}

export const sampleQuestions: Question[] = [
  {
    "id": 1,
    "question": "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
    "options": [
      "Bị nghiêm cấm",
      "Không bị nghiêm cấm",
      "Tùy trường hợp cụ thể"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Thấy Bị nghiêm cấm ➔ Chọn ngay đáp án 1!",
    "category": "KhaiNhiem",
    "isCritical": true
  },
  {
    "id": 2,
    "question": "Cuộc đua xe chỉ được thực hiện khi nào?",
    "options": [
      "Diễn ra trên đường phố không có người qua lại",
      "Được người dân đồng thuận",
      "Được cơ quan có thẩm quyền cấp phép"
    ],
    "answer": 2,
    "explanation": "Mẹo từ khóa: Chọn đáp án có cụm Được cơ quan có thẩm quyền cấp phép.",
    "category": "KhaiNhiem",
    "isCritical": true
  },
  {
    "id": 3,
    "question": "Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy có được phép sử dụng xe để kéo, đẩy xe khác, vật khác khi tham gia giao thông không?",
    "options": [
      "Được phép",
      "Tùy trường hợp",
      "Không được phép"
    ],
    "answer": 2,
    "explanation": "Mẹo từ khóa: Chọn đáp án Không được phép.",
    "category": "KhaiNhiem",
    "isCritical": true
  },
  {
    "id": 4,
    "question": "Người lái xe không được quay đầu xe trong các trường hợp nào sau đây?",
    "options": [
      "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm, trong hầm đường bộ",
      "Tại nơi đường giao nhau",
      "Tại nơi có biển báo cho phép quay đầu"
    ],
    "answer": 0,
    "explanation": "Tuyệt đối không được quay đầu trên cầu, gầm cầu vượt, trong hầm đường bộ.",
    "category": "KhaiNhiem",
    "isCritical": true
  },
  {
    "id": 5,
    "question": "Người đủ 18 tuổi trở lên được điều khiển loại xe nào sau đây?",
    "options": [
      "Xe mô tô 2 bánh dung tích từ 50cm3 trở lên, xe ô tô tải dưới 3500kg, ô tô đến 9 chỗ ngồi (Hạng B1, B2)",
      "Xe ô tô tải trên 3500kg (Hạng C)",
      "Xe ô tô chở người trên 30 chỗ (Hạng E)"
    ],
    "answer": 0,
    "explanation": "Mẹo độ tuổi: 18 tuổi ➔ Hạng A1, A2, B1, B2 (Ô tô đến 9 chỗ, xe tải dưới 3.5 tấn).",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 6,
    "question": "Tốc độ tối đa cho phép đối với xe ô tô con tham gia giao thông trong khu đông dân cư (đường đôi có dải phân cách giữa) là bao nhiêu?",
    "options": [
      "50 km/h",
      "60 km/h",
      "70 km/h",
      "80 km/h"
    ],
    "answer": 1,
    "explanation": "Mẹo tốc độ: Trong khu đông dân cư - Đường đôi ➔ Max 60 km/h.",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 7,
    "question": "Biển nào báo hiệu cấm xe ô tô con đi vào?",
    "options": [
      "Biển 1 (Hình tròn viền đỏ có hình ô tô con màu đen)",
      "Biển 2 (Biển cấm xe tải)",
      "Biển 3 (Biển cấm xe khách)"
    ],
    "answer": 0,
    "explanation": "Biển cấm ô tô con: Cấm ô tô con và các loại xe cơ giới 3-4 bánh.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 8,
    "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông tại ngã tư không có biển báo ưu tiên?",
    "options": [
      "Xe bên phải trống đi trước ➔ Xe đi thẳng ➔ Xe rẽ trái",
      "Xe rẽ trái đi trước",
      "Xe rẽ phải đi sau cùng"
    ],
    "answer": 0,
    "explanation": "Mẹo sa hình: Quyền bên phải không vướng đi trước.",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 9,
    "question": "Khi điều khiển xe ô tô số tự động xuống dốc dài, dốc cao, người lái xe phải thực hiện thao tác nào?",
    "options": [
      "Về số N và đạp phanh",
      "Về số thấp (L hoặc D1, D2), kết hợp phanh chân",
      "Tắt máy thả trôi"
    ],
    "answer": 1,
    "explanation": "Mẹo kỹ thuật: Xuống dốc dài ➔ Về số thấp (L/D1/D2) để phanh bằng động cơ.",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 10,
    "question": "Niên hạn sử dụng của xe ô tô chở người trên 9 chỗ ngồi là bao nhiêu năm?",
    "options": [
      "5 năm",
      "15 năm",
      "20 năm",
      "25 năm"
    ],
    "answer": 2,
    "explanation": "Mẹo niên hạn: Xe chở người > 9 chỗ ➔ Niên hạn 20 năm. Xe tải ➔ 25 năm.",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 11,
    "question": "[Câu 11] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 12,
    "question": "[Câu 12] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 13,
    "question": "[Câu 13] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 14,
    "question": "[Câu 14] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 15,
    "question": "[Câu 15] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 16,
    "question": "[Câu 16] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 17,
    "question": "[Câu 17] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 18,
    "question": "[Câu 18] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 19,
    "question": "[Câu 19] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 20,
    "question": "[Câu 20] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 21,
    "question": "[Câu 21] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 22,
    "question": "[Câu 22] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 23,
    "question": "[Câu 23] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 24,
    "question": "[Câu 24] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 25,
    "question": "[Câu 25] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 26,
    "question": "[Câu 26] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 27,
    "question": "[Câu 27] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 28,
    "question": "[Câu 28] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 29,
    "question": "[Câu 29] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 30,
    "question": "[Câu 30] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 31,
    "question": "[Câu 31] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 32,
    "question": "[Câu 32] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 33,
    "question": "[Câu 33] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 34,
    "question": "[Câu 34] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 35,
    "question": "[Câu 35] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 36,
    "question": "[Câu 36] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 37,
    "question": "[Câu 37] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 38,
    "question": "[Câu 38] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 39,
    "question": "[Câu 39] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 40,
    "question": "[Câu 40] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 41,
    "question": "[Câu 41] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 42,
    "question": "[Câu 42] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 43,
    "question": "[Câu 43] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 44,
    "question": "[Câu 44] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 45,
    "question": "[Câu 45] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 46,
    "question": "[Câu 46] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 47,
    "question": "[Câu 47] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 48,
    "question": "[Câu 48] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 49,
    "question": "[Câu 49] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 50,
    "question": "[Câu 50] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 51,
    "question": "[Câu 51] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 52,
    "question": "[Câu 52] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 53,
    "question": "[Câu 53] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 54,
    "question": "[Câu 54] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 55,
    "question": "[Câu 55] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 56,
    "question": "[Câu 56] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 57,
    "question": "[Câu 57] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 58,
    "question": "[Câu 58] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 59,
    "question": "[Câu 59] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 60,
    "question": "[Câu 60] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 61,
    "question": "[Câu 61] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 62,
    "question": "[Câu 62] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 63,
    "question": "[Câu 63] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 64,
    "question": "[Câu 64] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 65,
    "question": "[Câu 65] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 66,
    "question": "[Câu 66] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 67,
    "question": "[Câu 67] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 68,
    "question": "[Câu 68] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 69,
    "question": "[Câu 69] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 70,
    "question": "[Câu 70] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 71,
    "question": "[Câu 71] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 72,
    "question": "[Câu 72] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 73,
    "question": "[Câu 73] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 74,
    "question": "[Câu 74] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 75,
    "question": "[Câu 75] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 76,
    "question": "[Câu 76] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 77,
    "question": "[Câu 77] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 78,
    "question": "[Câu 78] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 79,
    "question": "[Câu 79] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 80,
    "question": "[Câu 80] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 81,
    "question": "[Câu 81] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 82,
    "question": "[Câu 82] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 83,
    "question": "[Câu 83] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 84,
    "question": "[Câu 84] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 85,
    "question": "[Câu 85] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 86,
    "question": "[Câu 86] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 87,
    "question": "[Câu 87] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 88,
    "question": "[Câu 88] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 89,
    "question": "[Câu 89] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 90,
    "question": "[Câu 90] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 91,
    "question": "[Câu 91] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 92,
    "question": "[Câu 92] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 93,
    "question": "[Câu 93] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 94,
    "question": "[Câu 94] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 95,
    "question": "[Câu 95] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 96,
    "question": "[Câu 96] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 97,
    "question": "[Câu 97] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 98,
    "question": "[Câu 98] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 99,
    "question": "[Câu 99] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 100,
    "question": "[Câu 100] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 101,
    "question": "[Câu 101] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 102,
    "question": "[Câu 102] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 103,
    "question": "[Câu 103] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 104,
    "question": "[Câu 104] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 105,
    "question": "[Câu 105] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 106,
    "question": "[Câu 106] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 107,
    "question": "[Câu 107] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 108,
    "question": "[Câu 108] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 109,
    "question": "[Câu 109] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 110,
    "question": "[Câu 110] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 111,
    "question": "[Câu 111] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 112,
    "question": "[Câu 112] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 113,
    "question": "[Câu 113] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 114,
    "question": "[Câu 114] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 115,
    "question": "[Câu 115] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 116,
    "question": "[Câu 116] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 117,
    "question": "[Câu 117] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 118,
    "question": "[Câu 118] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 119,
    "question": "[Câu 119] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 120,
    "question": "[Câu 120] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 121,
    "question": "[Câu 121] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 122,
    "question": "[Câu 122] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 123,
    "question": "[Câu 123] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 124,
    "question": "[Câu 124] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 125,
    "question": "[Câu 125] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 126,
    "question": "[Câu 126] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 127,
    "question": "[Câu 127] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 128,
    "question": "[Câu 128] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 129,
    "question": "[Câu 129] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 130,
    "question": "[Câu 130] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 131,
    "question": "[Câu 131] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 132,
    "question": "[Câu 132] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 133,
    "question": "[Câu 133] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 134,
    "question": "[Câu 134] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 135,
    "question": "[Câu 135] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 136,
    "question": "[Câu 136] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 137,
    "question": "[Câu 137] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 138,
    "question": "[Câu 138] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 139,
    "question": "[Câu 139] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 140,
    "question": "[Câu 140] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 141,
    "question": "[Câu 141] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 142,
    "question": "[Câu 142] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 143,
    "question": "[Câu 143] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 144,
    "question": "[Câu 144] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 145,
    "question": "[Câu 145] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 146,
    "question": "[Câu 146] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 147,
    "question": "[Câu 147] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 148,
    "question": "[Câu 148] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 149,
    "question": "[Câu 149] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 150,
    "question": "[Câu 150] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 151,
    "question": "[Câu 151] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 152,
    "question": "[Câu 152] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 153,
    "question": "[Câu 153] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 154,
    "question": "[Câu 154] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 155,
    "question": "[Câu 155] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 156,
    "question": "[Câu 156] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 157,
    "question": "[Câu 157] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 158,
    "question": "[Câu 158] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 159,
    "question": "[Câu 159] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 160,
    "question": "[Câu 160] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 161,
    "question": "[Câu 161] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 162,
    "question": "[Câu 162] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 163,
    "question": "[Câu 163] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 164,
    "question": "[Câu 164] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 165,
    "question": "[Câu 165] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 166,
    "question": "[Câu 166] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 167,
    "question": "[Câu 167] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 168,
    "question": "[Câu 168] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 169,
    "question": "[Câu 169] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 170,
    "question": "[Câu 170] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 171,
    "question": "[Câu 171] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 172,
    "question": "[Câu 172] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 173,
    "question": "[Câu 173] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 174,
    "question": "[Câu 174] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 175,
    "question": "[Câu 175] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 176,
    "question": "[Câu 176] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 177,
    "question": "[Câu 177] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 178,
    "question": "[Câu 178] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 179,
    "question": "[Câu 179] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 180,
    "question": "[Câu 180] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 181,
    "question": "[Câu 181] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 182,
    "question": "[Câu 182] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 183,
    "question": "[Câu 183] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 184,
    "question": "[Câu 184] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 185,
    "question": "[Câu 185] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 186,
    "question": "[Câu 186] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 187,
    "question": "[Câu 187] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 188,
    "question": "[Câu 188] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 189,
    "question": "[Câu 189] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 190,
    "question": "[Câu 190] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 191,
    "question": "[Câu 191] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 192,
    "question": "[Câu 192] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 193,
    "question": "[Câu 193] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 194,
    "question": "[Câu 194] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 195,
    "question": "[Câu 195] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 196,
    "question": "[Câu 196] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 197,
    "question": "[Câu 197] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 198,
    "question": "[Câu 198] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 199,
    "question": "[Câu 199] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 200,
    "question": "[Câu 200] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 201,
    "question": "[Câu 201] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 202,
    "question": "[Câu 202] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 203,
    "question": "[Câu 203] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 204,
    "question": "[Câu 204] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 205,
    "question": "[Câu 205] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 206,
    "question": "[Câu 206] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 207,
    "question": "[Câu 207] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 208,
    "question": "[Câu 208] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 209,
    "question": "[Câu 209] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 210,
    "question": "[Câu 210] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 211,
    "question": "[Câu 211] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 212,
    "question": "[Câu 212] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 213,
    "question": "[Câu 213] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 214,
    "question": "[Câu 214] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 215,
    "question": "[Câu 215] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 216,
    "question": "[Câu 216] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 217,
    "question": "[Câu 217] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 218,
    "question": "[Câu 218] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 219,
    "question": "[Câu 219] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 220,
    "question": "[Câu 220] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 221,
    "question": "[Câu 221] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 222,
    "question": "[Câu 222] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 223,
    "question": "[Câu 223] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 224,
    "question": "[Câu 224] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 225,
    "question": "[Câu 225] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 226,
    "question": "[Câu 226] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 227,
    "question": "[Câu 227] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 228,
    "question": "[Câu 228] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 229,
    "question": "[Câu 229] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 230,
    "question": "[Câu 230] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 231,
    "question": "[Câu 231] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 232,
    "question": "[Câu 232] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 233,
    "question": "[Câu 233] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 234,
    "question": "[Câu 234] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 235,
    "question": "[Câu 235] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 236,
    "question": "[Câu 236] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 237,
    "question": "[Câu 237] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 238,
    "question": "[Câu 238] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 239,
    "question": "[Câu 239] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 240,
    "question": "[Câu 240] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 241,
    "question": "[Câu 241] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 242,
    "question": "[Câu 242] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 243,
    "question": "[Câu 243] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 244,
    "question": "[Câu 244] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 245,
    "question": "[Câu 245] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 246,
    "question": "[Câu 246] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 247,
    "question": "[Câu 247] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 248,
    "question": "[Câu 248] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 249,
    "question": "[Câu 249] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 250,
    "question": "[Câu 250] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 251,
    "question": "[Câu 251] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 252,
    "question": "[Câu 252] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 253,
    "question": "[Câu 253] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 254,
    "question": "[Câu 254] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 255,
    "question": "[Câu 255] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 256,
    "question": "[Câu 256] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 257,
    "question": "[Câu 257] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 258,
    "question": "[Câu 258] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 259,
    "question": "[Câu 259] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 260,
    "question": "[Câu 260] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 261,
    "question": "[Câu 261] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 262,
    "question": "[Câu 262] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 263,
    "question": "[Câu 263] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 264,
    "question": "[Câu 264] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 265,
    "question": "[Câu 265] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 266,
    "question": "[Câu 266] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 267,
    "question": "[Câu 267] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 268,
    "question": "[Câu 268] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 269,
    "question": "[Câu 269] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 270,
    "question": "[Câu 270] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 271,
    "question": "[Câu 271] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 272,
    "question": "[Câu 272] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 273,
    "question": "[Câu 273] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 274,
    "question": "[Câu 274] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 275,
    "question": "[Câu 275] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 276,
    "question": "[Câu 276] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 277,
    "question": "[Câu 277] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 278,
    "question": "[Câu 278] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 279,
    "question": "[Câu 279] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 280,
    "question": "[Câu 280] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 281,
    "question": "[Câu 281] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 282,
    "question": "[Câu 282] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 283,
    "question": "[Câu 283] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 284,
    "question": "[Câu 284] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 285,
    "question": "[Câu 285] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 286,
    "question": "[Câu 286] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 287,
    "question": "[Câu 287] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 288,
    "question": "[Câu 288] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 289,
    "question": "[Câu 289] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 290,
    "question": "[Câu 290] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 291,
    "question": "[Câu 291] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 292,
    "question": "[Câu 292] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 293,
    "question": "[Câu 293] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 294,
    "question": "[Câu 294] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 295,
    "question": "[Câu 295] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 296,
    "question": "[Câu 296] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 297,
    "question": "[Câu 297] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 298,
    "question": "[Câu 298] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 299,
    "question": "[Câu 299] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 300,
    "question": "[Câu 300] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 301,
    "question": "[Câu 301] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 302,
    "question": "[Câu 302] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 303,
    "question": "[Câu 303] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 304,
    "question": "[Câu 304] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 305,
    "question": "[Câu 305] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 306,
    "question": "[Câu 306] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 307,
    "question": "[Câu 307] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 308,
    "question": "[Câu 308] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 309,
    "question": "[Câu 309] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 310,
    "question": "[Câu 310] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 311,
    "question": "[Câu 311] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 312,
    "question": "[Câu 312] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 313,
    "question": "[Câu 313] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 314,
    "question": "[Câu 314] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 315,
    "question": "[Câu 315] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 316,
    "question": "[Câu 316] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 317,
    "question": "[Câu 317] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 318,
    "question": "[Câu 318] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 319,
    "question": "[Câu 319] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 320,
    "question": "[Câu 320] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 321,
    "question": "[Câu 321] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 322,
    "question": "[Câu 322] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 323,
    "question": "[Câu 323] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 324,
    "question": "[Câu 324] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 325,
    "question": "[Câu 325] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 326,
    "question": "[Câu 326] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 327,
    "question": "[Câu 327] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 328,
    "question": "[Câu 328] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 329,
    "question": "[Câu 329] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 330,
    "question": "[Câu 330] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 331,
    "question": "[Câu 331] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 332,
    "question": "[Câu 332] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 333,
    "question": "[Câu 333] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 334,
    "question": "[Câu 334] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 335,
    "question": "[Câu 335] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 336,
    "question": "[Câu 336] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 337,
    "question": "[Câu 337] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 338,
    "question": "[Câu 338] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 339,
    "question": "[Câu 339] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 340,
    "question": "[Câu 340] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 341,
    "question": "[Câu 341] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 342,
    "question": "[Câu 342] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 343,
    "question": "[Câu 343] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 344,
    "question": "[Câu 344] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 345,
    "question": "[Câu 345] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 346,
    "question": "[Câu 346] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 347,
    "question": "[Câu 347] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 348,
    "question": "[Câu 348] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 349,
    "question": "[Câu 349] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 350,
    "question": "[Câu 350] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 351,
    "question": "[Câu 351] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 352,
    "question": "[Câu 352] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 353,
    "question": "[Câu 353] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 354,
    "question": "[Câu 354] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 355,
    "question": "[Câu 355] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 356,
    "question": "[Câu 356] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 357,
    "question": "[Câu 357] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 358,
    "question": "[Câu 358] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 359,
    "question": "[Câu 359] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 360,
    "question": "[Câu 360] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 361,
    "question": "[Câu 361] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 362,
    "question": "[Câu 362] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 363,
    "question": "[Câu 363] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 364,
    "question": "[Câu 364] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 365,
    "question": "[Câu 365] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 366,
    "question": "[Câu 366] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 367,
    "question": "[Câu 367] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 368,
    "question": "[Câu 368] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 369,
    "question": "[Câu 369] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 370,
    "question": "[Câu 370] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 371,
    "question": "[Câu 371] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 372,
    "question": "[Câu 372] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 373,
    "question": "[Câu 373] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 374,
    "question": "[Câu 374] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 375,
    "question": "[Câu 375] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 376,
    "question": "[Câu 376] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 377,
    "question": "[Câu 377] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 378,
    "question": "[Câu 378] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 379,
    "question": "[Câu 379] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 380,
    "question": "[Câu 380] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 381,
    "question": "[Câu 381] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 382,
    "question": "[Câu 382] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 383,
    "question": "[Câu 383] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 384,
    "question": "[Câu 384] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 385,
    "question": "[Câu 385] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 386,
    "question": "[Câu 386] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 387,
    "question": "[Câu 387] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 388,
    "question": "[Câu 388] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 389,
    "question": "[Câu 389] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 390,
    "question": "[Câu 390] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 391,
    "question": "[Câu 391] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 392,
    "question": "[Câu 392] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 393,
    "question": "[Câu 393] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 394,
    "question": "[Câu 394] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 395,
    "question": "[Câu 395] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 396,
    "question": "[Câu 396] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 397,
    "question": "[Câu 397] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 398,
    "question": "[Câu 398] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 399,
    "question": "[Câu 399] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 400,
    "question": "[Câu 400] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 401,
    "question": "[Câu 401] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 402,
    "question": "[Câu 402] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 403,
    "question": "[Câu 403] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 404,
    "question": "[Câu 404] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 405,
    "question": "[Câu 405] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 406,
    "question": "[Câu 406] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 407,
    "question": "[Câu 407] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 408,
    "question": "[Câu 408] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 409,
    "question": "[Câu 409] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 410,
    "question": "[Câu 410] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 411,
    "question": "[Câu 411] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 412,
    "question": "[Câu 412] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 413,
    "question": "[Câu 413] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 414,
    "question": "[Câu 414] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 415,
    "question": "[Câu 415] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 416,
    "question": "[Câu 416] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 417,
    "question": "[Câu 417] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 418,
    "question": "[Câu 418] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 419,
    "question": "[Câu 419] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 420,
    "question": "[Câu 420] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 421,
    "question": "[Câu 421] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 422,
    "question": "[Câu 422] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 423,
    "question": "[Câu 423] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 424,
    "question": "[Câu 424] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 425,
    "question": "[Câu 425] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 426,
    "question": "[Câu 426] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 427,
    "question": "[Câu 427] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 428,
    "question": "[Câu 428] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 429,
    "question": "[Câu 429] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 430,
    "question": "[Câu 430] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 431,
    "question": "[Câu 431] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 432,
    "question": "[Câu 432] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 433,
    "question": "[Câu 433] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 434,
    "question": "[Câu 434] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 435,
    "question": "[Câu 435] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 436,
    "question": "[Câu 436] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 437,
    "question": "[Câu 437] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 438,
    "question": "[Câu 438] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 439,
    "question": "[Câu 439] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 440,
    "question": "[Câu 440] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 441,
    "question": "[Câu 441] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 442,
    "question": "[Câu 442] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 443,
    "question": "[Câu 443] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 444,
    "question": "[Câu 444] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 445,
    "question": "[Câu 445] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 446,
    "question": "[Câu 446] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 447,
    "question": "[Câu 447] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 448,
    "question": "[Câu 448] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 449,
    "question": "[Câu 449] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 450,
    "question": "[Câu 450] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 451,
    "question": "[Câu 451] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 452,
    "question": "[Câu 452] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 453,
    "question": "[Câu 453] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 454,
    "question": "[Câu 454] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 455,
    "question": "[Câu 455] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 456,
    "question": "[Câu 456] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 457,
    "question": "[Câu 457] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 458,
    "question": "[Câu 458] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 459,
    "question": "[Câu 459] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 460,
    "question": "[Câu 460] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 461,
    "question": "[Câu 461] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 462,
    "question": "[Câu 462] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 463,
    "question": "[Câu 463] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 464,
    "question": "[Câu 464] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 465,
    "question": "[Câu 465] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 466,
    "question": "[Câu 466] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 467,
    "question": "[Câu 467] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 468,
    "question": "[Câu 468] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 469,
    "question": "[Câu 469] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 470,
    "question": "[Câu 470] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 471,
    "question": "[Câu 471] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 472,
    "question": "[Câu 472] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 473,
    "question": "[Câu 473] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 474,
    "question": "[Câu 474] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 475,
    "question": "[Câu 475] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 476,
    "question": "[Câu 476] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 477,
    "question": "[Câu 477] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 478,
    "question": "[Câu 478] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 479,
    "question": "[Câu 479] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 480,
    "question": "[Câu 480] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 481,
    "question": "[Câu 481] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 482,
    "question": "[Câu 482] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 483,
    "question": "[Câu 483] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 484,
    "question": "[Câu 484] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 485,
    "question": "[Câu 485] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 486,
    "question": "[Câu 486] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 487,
    "question": "[Câu 487] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 488,
    "question": "[Câu 488] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 489,
    "question": "[Câu 489] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 490,
    "question": "[Câu 490] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 491,
    "question": "[Câu 491] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 492,
    "question": "[Câu 492] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 493,
    "question": "[Câu 493] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 494,
    "question": "[Câu 494] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 495,
    "question": "[Câu 495] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 496,
    "question": "[Câu 496] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 497,
    "question": "[Câu 497] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 498,
    "question": "[Câu 498] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 499,
    "question": "[Câu 499] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 500,
    "question": "[Câu 500] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 501,
    "question": "[Câu 501] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 502,
    "question": "[Câu 502] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 503,
    "question": "[Câu 503] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 504,
    "question": "[Câu 504] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 505,
    "question": "[Câu 505] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 506,
    "question": "[Câu 506] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 507,
    "question": "[Câu 507] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 508,
    "question": "[Câu 508] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 509,
    "question": "[Câu 509] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 510,
    "question": "[Câu 510] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 511,
    "question": "[Câu 511] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 512,
    "question": "[Câu 512] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 513,
    "question": "[Câu 513] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 514,
    "question": "[Câu 514] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 515,
    "question": "[Câu 515] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 516,
    "question": "[Câu 516] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 517,
    "question": "[Câu 517] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 518,
    "question": "[Câu 518] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 519,
    "question": "[Câu 519] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 520,
    "question": "[Câu 520] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 521,
    "question": "[Câu 521] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 522,
    "question": "[Câu 522] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 523,
    "question": "[Câu 523] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 524,
    "question": "[Câu 524] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 525,
    "question": "[Câu 525] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 526,
    "question": "[Câu 526] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 527,
    "question": "[Câu 527] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 528,
    "question": "[Câu 528] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 529,
    "question": "[Câu 529] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 530,
    "question": "[Câu 530] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 531,
    "question": "[Câu 531] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 532,
    "question": "[Câu 532] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 533,
    "question": "[Câu 533] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 534,
    "question": "[Câu 534] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 535,
    "question": "[Câu 535] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 536,
    "question": "[Câu 536] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 537,
    "question": "[Câu 537] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 538,
    "question": "[Câu 538] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 539,
    "question": "[Câu 539] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 540,
    "question": "[Câu 540] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 541,
    "question": "[Câu 541] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 542,
    "question": "[Câu 542] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 543,
    "question": "[Câu 543] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 544,
    "question": "[Câu 544] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 545,
    "question": "[Câu 545] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 546,
    "question": "[Câu 546] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 547,
    "question": "[Câu 547] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 548,
    "question": "[Câu 548] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 549,
    "question": "[Câu 549] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 550,
    "question": "[Câu 550] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 551,
    "question": "[Câu 551] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 552,
    "question": "[Câu 552] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 553,
    "question": "[Câu 553] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 554,
    "question": "[Câu 554] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 555,
    "question": "[Câu 555] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 556,
    "question": "[Câu 556] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 557,
    "question": "[Câu 557] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 558,
    "question": "[Câu 558] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 559,
    "question": "[Câu 559] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 560,
    "question": "[Câu 560] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 561,
    "question": "[Câu 561] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 562,
    "question": "[Câu 562] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 563,
    "question": "[Câu 563] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 564,
    "question": "[Câu 564] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 565,
    "question": "[Câu 565] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 566,
    "question": "[Câu 566] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 567,
    "question": "[Câu 567] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 568,
    "question": "[Câu 568] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 569,
    "question": "[Câu 569] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 570,
    "question": "[Câu 570] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 571,
    "question": "[Câu 571] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 572,
    "question": "[Câu 572] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 573,
    "question": "[Câu 573] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 574,
    "question": "[Câu 574] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 575,
    "question": "[Câu 575] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 576,
    "question": "[Câu 576] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 577,
    "question": "[Câu 577] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 578,
    "question": "[Câu 578] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 579,
    "question": "[Câu 579] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 580,
    "question": "[Câu 580] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 581,
    "question": "[Câu 581] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 582,
    "question": "[Câu 582] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 583,
    "question": "[Câu 583] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 584,
    "question": "[Câu 584] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 585,
    "question": "[Câu 585] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 586,
    "question": "[Câu 586] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 587,
    "question": "[Câu 587] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 588,
    "question": "[Câu 588] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 589,
    "question": "[Câu 589] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 590,
    "question": "[Câu 590] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  },
  {
    "id": 591,
    "question": "[Câu 591] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 592,
    "question": "[Câu 592] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 593,
    "question": "[Câu 593] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 594,
    "question": "[Câu 594] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 595,
    "question": "[Câu 595] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": false
  },
  {
    "id": 596,
    "question": "[Câu 596] Trong các hành vi sau, hành vi nào bị nghiêm cấm tuyệt đối khi điều khiển phương tiện giao thông đường bộ?",
    "options": [
      "Điều khiển xe khi trong máu hoặc hơi thở có nồng độ cồn",
      "Bật đèn chiếu xa khi đi ban đêm",
      "Giảm tốc độ khi qua ngã tư"
    ],
    "answer": 0,
    "explanation": "Mẹo từ khóa: Chọn ngay đáp án có nồng độ cồn / Bị nghiêm cấm!",
    "category": "KhaiNhiem",
    "isCritical": false
  },
  {
    "id": 597,
    "question": "[Câu 597] Trên đường bộ ngoài khu đông dân cư, khoảng cách an toàn tối thiểu giữa hai xe khi di chuyển với tốc độ từ 60 km/h đến 80 km/h là bao nhiêu?",
    "options": [
      "35 mét",
      "55 mét",
      "70 mét",
      "100 mét"
    ],
    "answer": 1,
    "explanation": "Mẹo khoảng cách: 60-80 km/h ➔ Chọn 55 mét!",
    "category": "VienThong",
    "isCritical": false
  },
  {
    "id": 598,
    "question": "[Câu 598] Biển nào báo hiệu giao nhau với đường ưu tiên (xe đang chạy trên đường giao cắt phải nhường đường)?",
    "options": [
      "Biển tam giác đỉnh hướng xuống dưới (Biển 208)",
      "Biển hình thoi màu vàng",
      "Biển tròn nền đỏ"
    ],
    "answer": 0,
    "explanation": "Biển 208 (tam giác ngược): Giao nhau với đường ưu tiên.",
    "category": "BienBao",
    "isCritical": false
  },
  {
    "id": 599,
    "question": "[Câu 599] Tại giao lộ sa hình có xe chữa cháy và xe công an cùng xuất hiện, xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi trước",
      "Xe chữa cháy đi trước",
      "Cả 2 xe đi cùng lúc"
    ],
    "answer": 1,
    "explanation": "Mẹo ưu tiên: Hỏa (Chữa cháy) ➔ Quân ➔ Công ➔ Thương. Xe chữa cháy đi trước!",
    "category": "SaHinh",
    "isCritical": false
  },
  {
    "id": 600,
    "question": "[Câu 600] Âm lượng còi điện lắp trên ô tô đo ở độ cao 1.2m với khoảng cách 2m phía trước xe nằm trong khoảng nào là đúng quy chuẩn?",
    "options": [
      "Không nhỏ hơn 90 dB(A), không lớn hơn 115 dB(A)",
      "Tùy loại xe",
      "Không quy định"
    ],
    "answer": 0,
    "explanation": "Quy chuẩn âm lượng còi ô tô: 90 - 115 dB(A).",
    "category": "KyThuat",
    "isCritical": true
  }
];
