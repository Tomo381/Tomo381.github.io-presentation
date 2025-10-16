document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const reservation = {
    name: formData.get("name"),
    studentId: formData.get("studentId"),
    purpose: formData.get("purpose"),
    people: formData.get("people"),
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime"),
  };

  // ローカルストレージに保存（仮）
  localStorage.setItem("reservation", JSON.stringify(reservation));

  // 確認表示
  document.getElementById("confirmation").style.display = "block";
  document.getElementById("confirmation").innerHTML = `
    <h2>予約完了</h2>
    <p>${reservation.name} さんの予約を受け付けました。</p>
    <p>使用用途：${reservation.purpose}</p>
    <p>利用人数：${reservation.people}</p>
    <p>期間：${reservation.startTime} ～ ${reservation.endTime}</p>
  `;

  e.target.reset();
});
