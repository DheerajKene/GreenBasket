import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './MyAccount.css'

const MyAccount = () => {
  const navigate = useNavigate()
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('👤')
  const fileInputRef = useRef(null)
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    mobile: ''
  })
  const [loading, setLoading] = useState(true)

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          navigate('/login')
          return
        }

        const response = await fetch('http://localhost:8100/user/profile', {
          method: 'GET',
          headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })

        if (response.ok) {
          const data = await response.json()
          setUserData({
            firstName: data.FirstName || '',
            lastName: data.LastName || '',
            mobile: data.Mobile || ''
          })
        } else if (response.status === 401) {
          navigate('/login')
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result)
        setProfilePhoto(file)
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePhotoClick = () => {
    fileInputRef.current.click()
  }

  const handleCreateMall = () => {
    alert('Create Mall feature - Coming Soon!')
  }

  const handleSellProducts = () => {
    alert('Sell Products feature - Coming Soon!')
  }

  const handleBuyProducts = () => {
    navigate('/explore')
  }

  return (
    <div className="my-account-page">
      <div className="account-container">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-header">
            <h1>My Account</h1>
            <p className="subtitle">Manage your profile and business</p>
          </div>

          {/* Profile Photo */}
          <div className="profile-photo-container">
            <div className="profile-photo" onClick={handlePhotoClick}>
              {typeof previewUrl === 'string' && previewUrl.startsWith('data:') ? (
                <img src={previewUrl} alt="Profile" />
              ) : (
                <span className="avatar-icon">{previewUrl}</span>
              )}
              <div className="photo-overlay">
                <span>Change</span>
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: 'none' }}
            />
            <p className="photo-hint">Click to upload profile photo</p>
          </div>

          {/* User Info Placeholder */}
          <div className="user-info">
            {loading ? (
              <p>Loading user information...</p>
            ) : (
              <>
                <div className="info-item">
                  <label>Name:</label>
                  <span>{userData.firstName} {userData.lastName}</span>
                </div>
                <div className="info-item">
                  <label>Phone:</label>
                  <span>{userData.mobile}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Actions Section */}
        <div className="actions-section">
          <h2>What would you like to do?</h2>
          <div className="action-buttons">
            <button className="action-btn buy-btn" onClick={handleBuyProducts}>
              <div className="btn-icon">🛒</div>
              <div className="btn-content">
                <h3>Buy Products</h3>
                <p>Browse and purchase fresh produce</p>
              </div>
            </button>

            <button className="action-btn sell-btn" onClick={handleSellProducts}>
              <div className="btn-icon">📦</div>
              <div className="btn-content">
                <h3>Sell Products</h3>
                <p>List and manage your products</p>
              </div>
            </button>

            <button className="action-btn mall-btn" onClick={handleCreateMall}>
              <div className="btn-icon">🏪</div>
              <div className="btn-content">
                <h3>Create Mall</h3>
                <p>Set up your own online mall</p>
              </div>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="stats-section">
          <div className="stat-card">
            <span className="stat-number">0</span>
            <span className="stat-label">Orders</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0</span>
            <span className="stat-label">Products Selling</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0</span>
            <span className="stat-label">Malls</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
