"use client";
import { API_URL } from '@/config';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CreatePublication() {
  const [user, setUser] = useState('');
  const [articles, setArticles] = useState([]);
  const [integrations, setIntegrations] = useState([]);
  const [integrationIds, setIntegrationIds] = useState([]);
  const [articleId, setArticleId] = useState('');

  useEffect(() => {
    const logUser = JSON.parse(localStorage.getItem('user') || '');
    setUser(logUser)
    axios.post(`${API_URL}/articles/get-all`, {filter: {userId: logUser?._id}})
    .then((res) => {
      setArticles(res?.data?.data)
    })
    .catch((err) => {
      console.log({err})
    })
    axios.post(`${API_URL}/integrations/get-all`, { filter: { userId: logUser?._id}})
    .then((res) => {
      setIntegrations(res?.data?.data)
    })
    .catch((err) => {
      console.log({err})
    })
  },[])
  console.log({user})
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/publication/create`, { userId: user?._id, integrationIds: integrationIds, articleId: articleId})
    .then((res) => {
        console.log({res})
    })
    .catch((err) => {
        console.log({err})
    })
  }
  console.log({integrationIds})
  const handleIntegrationChange = (integrationId) => {
    if (integrationIds.includes(integrationId)) {
      setIntegrationIds(integrationIds.filter(id => id !== integrationId));
    } else {
      setIntegrationIds([...integrationIds, integrationId]);
    }
  };
  return (
    <div className="md:px-12 px-2 md:py-10 py-8">
        <p className="text-[34px] font-[500] "> Publications </p>
        <div className="gap-2 px-2">
  <div className="w-full mx-auto mt-4">
    <label
      className="block mb-2 text-[16px] leading-[24px] font-[500] text-[#344054] dark:text-white"
    >
      Select Integration
    </label>
    <div className="mt-2 border-[1px] rounded-lg p-2">
      {/* Render checkboxes */}
      {integrations?.length ? (
        integrations.map((integ) => (
          <div key={integ._id} className="flex items-center">
            <input
              type="checkbox"
              id={integ._id}
              value={integ._id}
              checked={integrationIds.includes(integ._id)}
              onChange={(e) => handleIntegrationChange(e.target.value)}
              className="mr-2"
            />
            <label htmlFor={integ._id}>{integ.name}</label>
          </div>
        ))
      ) : (
        <p>No integrations available</p>
      )}
    </div>
  </div>
</div>

          <div className=" gap-2  px-2 ">
            <div className="w-full mx-auto mt-4">
              <label
                htmlFor="blog-select"
                className="block mb-2 text-[16px] leading-[24px] font-[500] text-[#344054] dark:text-white"
              >
                Select Article
              </label>
              <select
                id="blog-select"
                value={articleId}
                onChange={(e) => setArticleId(e.target.value)}
                className="px-3 h-[46px] md:w-[447px] w-full mt-2 border-[1px] rounded-lg"
              >
                <option value="">Select Article</option>
                {articles?.length && articles?.map((article) => (
                  <option key={article?._id} value={article?._id}>
                    {article?.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:flex justify-between  md:mt-12 mt-6">
        <button className="mt-3 h-[50px] md:w-[160px] w-full rounded-[6px] text-[#DE5B87]">
          {/* Delete */}
        </button>
        <div className="md:flex gap-2 ">
          <button className="mt-3 h-[50px] md:w-[160px] w-full rounded-[6px] border-[#7A73FF] border-[1px] text-[#7A73FF] float-right">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="mt-3 h-[50px] md:w-[160px] w-full rounded-[6px] bg-[#7A73FF] text-white float-right"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePublication